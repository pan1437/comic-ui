import type { Context } from 'react';
import { createContext } from 'react';

export interface CheckboxGroupContextType {
  value?: (number | string)[];
  groupChange?: (value: (number | string)[]) => void;
}

export const CheckboxGroupContext: Context<CheckboxGroupContextType> = createContext({});
