import type { Context } from 'react';
import { createContext } from 'react';

export interface RowContextState {
  gutter?: number;
  // wrap?: boolean;
}

export const RowContext: Context<RowContextState> = createContext({});
