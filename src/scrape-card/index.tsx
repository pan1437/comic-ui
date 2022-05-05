import React, { createRef, useEffect } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';

export interface ScrapeCardProps extends BaseElementProps {
  /**
   * @description       嵌套内容
   * @default
   */
  children?: React.ReactNode;

  /**
   * @description       画布颜色
   * @default            #c9cdd4
   */
  color?: string;

  /**
   * @description       圆角
   * @default            false
   */
  round?: boolean;

  /**
   * @description       画布宽度
   * @default             400
   */
  width?: number;

  /**
   * @description       画布高度
   * @default             100
   */
  height?: number;
}

const classPrefix = getClassPrefix('scrape');

function getLocalCoords(ele: HTMLCanvasElement, ev: TouchEvent | MouseEvent) {
  let ox = 0,
    oy = 0;
  let first;
  let pageX, pageY;
  let elem: HTMLElement | null = ele;
  // currentTarget element.
  while (elem !== null) {
    ox += elem.offsetLeft;
    oy += elem.offsetTop;
    elem = elem.offsetParent as HTMLElement;
  }
  // fix,<=IE8
  if ('changedTouches' in ev) {
    first = ev.changedTouches[0];
    pageX = first.pageX;
    pageY = first.pageY;
  } else {
    pageX = ev.pageX;
    pageY = ev.pageY;
  }
  return { x: pageX - ox, y: pageY - oy };
}

function diffTransSize(
  ctx: CanvasRenderingContext2D,
  thresholdp: number,
  callback: (l: number) => void,
  width: number,
  height: number,
) {
  let threshold = thresholdp;
  threshold = threshold || 0.5;
  if (threshold > 1 || threshold < 0) threshold = 1;
  const imageData = ctx.getImageData(0, 0, width, height),
    pix = imageData.data,
    pixLength = pix.length,
    pixelSize = pixLength * 0.25;
  let i = 1,
    l = 0;
  for (; i <= pixelSize; i++) {
    // 3, 7, 11 -> 4n-1
    if (0 === pix[4 * i - 1]) l++;
  }
  if (l > pixelSize * threshold) {
    callback.apply(ctx, [l]);
  }
}
function scratchLine(
  cvs: HTMLCanvasElement,
  x: number,
  y: number,
  fresh: boolean,
  width: number,
  height: number,
) {
  const ctx = cvs.getContext('2d')!;
  // sumsung Android 4.1.2, 4.2.2 default browser does not render, https://goo.gl/H5lwgo
  ctx.globalCompositeOperation = 'destination-out';

  ctx.lineWidth = 25;
  ctx.lineCap = ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(0,0,0,1)'; //'#000';
  if (fresh) {
    ctx.beginPath();
    // bug WebKit/Opera/IE9: +0.01
    ctx.moveTo(x + 0.1, y);
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  // fix sumsung bug
  const style = cvs.style; // cursor/lineHeight
  style.lineHeight = style.lineHeight == '1' ? '1.1' : '1';

  diffTransSize(
    ctx,
    0.5,
    function () {
      // document.getElementById('title').innerHTML = '50% complete';
    },
    width,
    height,
  );
}

export const ScrapeCard: React.FC<ScrapeCardProps> = (props) => {
  const {
    children,
    className,
    style,
    width = 400,
    height = 100,
    round,
    color = '#c9cdd4',
    ...rest
  } = props;
  const classes = () => classNames(classPrefix, className);

  const innerClasses = () =>
    classNames(`${classPrefix}-canvas`, {
      [`${classPrefix}-round`]: round,
    });

  const target = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const cvs = target.current!;
    cvs.width = width;
    cvs.height = height;
    const ctx = target.current!.getContext('2d')!;
    let mouseDown = false;

    // add mask
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    const mousedown_handler = function (e: TouchEvent | MouseEvent) {
      const local = getLocalCoords(cvs, e);
      mouseDown = true;
      scratchLine(cvs, local.x, local.y, true, width, height);
      if (e.cancelable) {
        e.preventDefault();
      }
      return false;
    };
    const mousemove_handler = function (e: TouchEvent | MouseEvent) {
      if (!mouseDown) {
        return true;
      }
      const local = getLocalCoords(cvs, e);
      scratchLine(cvs, local.x, local.y, false, width, height);

      if (e.cancelable) {
        e.preventDefault();
      }
      return false;
    };
    // On mouseup
    const mouseup_handler = function (e: TouchEvent | MouseEvent) {
      if (mouseDown) {
        mouseDown = false;
        if (e.cancelable) {
          e.preventDefault();
        }
        return false;
      }
      return true;
    };

    cvs.addEventListener('mousedown', mousedown_handler);
    cvs.addEventListener('touchstart', mousedown_handler);
    window.addEventListener('mousemove', mousemove_handler);
    window.addEventListener('touchmove', mousemove_handler);
    window.addEventListener('mouseup', mouseup_handler);
    window.addEventListener('touchend', mouseup_handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ScrapeCardStyle: React.CSSProperties = {};
  ScrapeCardStyle.width = `${width}px`;
  ScrapeCardStyle.height = `${height}px`;

  return (
    <div className={classes()} style={{ ...ScrapeCardStyle, ...style }}>
      <canvas className={innerClasses()} ref={target} {...rest} width={width} height={height} />
      {children}
    </div>
  );
};

ScrapeCard.propTypes = {
  children: t.node,
  round: t.bool,
  color: t.string,
};
