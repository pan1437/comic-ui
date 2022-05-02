import React from 'react';
import { Clear } from './clear';
import { Eye } from './eye';
import { NoEye } from './no-eye';

export interface IconProps extends BaseElementIconProps {
  type?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, ...rest } = props;

  const targetIcon: Record<string, React.FC<BaseElementIconProps>> = {
    clear: Clear,
    eye: Eye,
    'no-eye': NoEye,
  };
  const Component = targetIcon[type!];
  return <Component {...rest} />;
};
