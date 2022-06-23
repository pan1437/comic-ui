import React from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';

export interface FruitsProps extends BaseElementProps {
  /**
   * @description       类型
   * @default            apple
   */
  type?: 'pear' | 'avocado' | 'lemon' | 'apple';

  /**
   * @description       宽度
   * @default             65
   */
  width?: number;

  /**
   * @description       高度
   * @default             55
   */
  height?: number;
}

const classPrefix = getClassPrefix('fruits');

export const Fruits: React.FC<FruitsProps> = (props) => {
  const { className, style, width = 65, height = 55, type = 'apple' } = props;
  const classes = () =>
    classNames(classPrefix, className, {
      [`${classPrefix}-${type}`]: type,
    });

  const FruitsStyle: React.CSSProperties = {
    width: width,
    height: height,
  };

  return (
    <div className={classes()} style={{ ...FruitsStyle, ...style }}>
      {['avocado'].includes(type) && <div className={`${classPrefix}-${type}-inner`} />}
    </div>
  );
};

Fruits.propTypes = {
  type: t.oneOf(['pear', 'avocado', 'lemon', 'apple']),
  width: t.number,
  height: t.number,
};
