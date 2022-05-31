import type { FocusEvent } from 'react';

export interface RadioBaseElementProps extends BaseElementProps {
  /**
   * ignore
   * @description     聚焦事件
   * @default
   */
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;

  /**
   * ignore
   * @description     失焦事件
   * @default
   */
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

