import React from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';


export interface ScrapeCardProps extends BaseElementProps {

  /**
   * @description       嵌套文字
   * @default           
   */
  children?: React.ReactNode;
}

const classPrefix = getClassPrefix('scrape');

export const ScrapeCard: React.FC<ScrapeCardProps> = (props) => {
  const { children, className, style, ...rest } = props;
  const classes = () => classNames(classPrefix, {
    // [`${classPrefix}-${type}`]: true,
    // [`${classPrefix}-with-text`]: type !== 'vertical' && children,
    // [`${classPrefix}-with-text-${position}`]: type !== 'vertical' && position,
  },className);

  const ScrapeCardStyle: React.CSSProperties = {};

  return (
    <>
      <canvas className={classes()} {...rest} id="canvas" width="400" height="100">
      </canvas>
      {children && (
        <span className={`${classPrefix}-inner-text`}>
          {children}
        </span>
      )}
    </>
  )
};

ScrapeCard.propTypes = {
  children: t.node,
};
