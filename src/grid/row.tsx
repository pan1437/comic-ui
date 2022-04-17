import React, { useMemo } from 'react';
import t from 'prop-types';
import classNames from 'classnames';
import { getClassPrefix } from '../util/common';
import { RowContext } from './RowContext';

export interface RowProps extends BaseElementProps{

  /**  
   * @description      栅格间隔 (1.0.0 仅支持number类型)
   * @default           0
   */
   gutter?: number;

  /**
   * @description      flex 布局下的垂直排列方式
   * @default           middle
   */
  align?: 'top' | 'middle' | 'bottom';

  /**
   * @description      flex 布局下的水平排列方式
   * @default           start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';

  /**
   * @description      是否自动换行
   * @default           true
   */
  wrap?: boolean;
  children?: React.ReactNode;
}

const classPrefix = getClassPrefix('row');

const Row: React.FC<RowProps> = (props) => {
  const { align, gutter, justify, wrap, children, style, className, ...rest } = props
  const classes = () => classNames(classPrefix, {
    [`${classPrefix}-${align}`]: !!align,
    [`${classPrefix}-${justify}`]: !!justify,
    [`${classPrefix}-no-wrap`]: !wrap
  },className);

  const rowStyle: React.CSSProperties = {};
  if(gutter) {
    rowStyle.marginLeft = gutter / -2;
    rowStyle.marginRight = gutter / -2;
  }

  const rowContext = useMemo(() => ({
    gutter,
  }), [gutter]);

  

  return (
    <RowContext.Provider value={rowContext}>
      <div
        className={classes()}
        style={{ ...rowStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    </RowContext.Provider>
  )
};

Row.propTypes = {
  align: t.oneOf(['top', 'middle', 'bottom']),
  justify: t.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
  gutter: t.number,
  wrap: t.bool,
};

export default Row;