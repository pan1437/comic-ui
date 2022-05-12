import type { Context } from 'react';
import { createContext } from 'react';

export interface RadioGroupContextType {
  value?: string | number;
  groupChange?: (value: string) => void;
}

export const RadioGroupContext: Context<RadioGroupContextType> = createContext({});
