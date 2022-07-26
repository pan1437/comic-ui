import React from 'react';

export const NoBorderClear: React.FC<BaseElementIconProps> = (props) => {
  const { width = 14, height = 14, ...rest } = props;
  return (
    <svg
      {...rest}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="23300"
      width={width}
      height={height}
    >
      <path
        d="M738.27 315.9l-30.17-30.17L512 481.83l-196.1-196.1-30.17 30.17L481.83 512l-196.1 196.1 30.17 30.17L512 542.17l196.1 196.1 30.17-30.17L542.17 512l196.1-196.1z"
        fill="currentColor"
        p-id="5157"
      />
    </svg>
  );
};
