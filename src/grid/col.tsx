import React, { useContext } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import { RowContext } from './RowContext';
import classNames from 'classnames';

export interface ColProps extends BaseElementProps {
  /**
   * @description      栅格占位格数 为 0 时相当于 display: none
   * @default           0
   */
  span?: number;

  /**
   * @description      列偏移 使用 offset 可以将列向右侧偏
   * @default           0
   */
  offset?: number;

  children?: React.ReactNode;
}

const classPrefix = getClassPrefix('col');

const Col: React.FC<ColProps> = (props) => {
  const { span, children, style, className, offset, ...rest } = props;
  const { gutter } = useContext(RowContext);
  const classes = () =>
    classNames(
      classPrefix,
      {
        [`${classPrefix}-${span}`]: typeof span === 'number' && span >= 0,
        [`${classPrefix}-offset-${offset}`]: typeof offset === 'number' && offset >= 0,
      },
      className,
    );

  const ColStyle: React.CSSProperties = {};
  if (gutter && gutter > 0) {
    ColStyle.paddingLeft = gutter / 2;
    ColStyle.paddingRight = gutter / 2;
  }

  return (
    <div className={classes()} style={{ ...ColStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

Col.propTypes = {
  span: t.number,
  offset: t.number,
};

export default Col;
