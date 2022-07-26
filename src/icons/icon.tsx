import React from 'react';
import { Clear } from './clear';
import { Eye } from './eye';
import { NoEye } from './no-eye';
import { Info } from './feed-back/info';
import { Warning } from './feed-back/warning';
import { Error } from './feed-back/error';
import { Success } from './feed-back/success';
import { NoBorderClear } from './feed-back/clear';

export interface IconProps extends BaseElementIconProps {
  type?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, ...rest } = props;

  const targetIcon: Record<string, React.FC<BaseElementIconProps>> = {
    clear: Clear,
    eye: Eye,
    'no-eye': NoEye,
    info: Info,
    warning: Warning,
    error: Error,
    success: Success,
    noBorderClear: NoBorderClear,
  };
  const Component = targetIcon[type!];
  return <Component {...rest} />;
};
