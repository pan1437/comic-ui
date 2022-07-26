import React from 'react';

export const Success: React.FC<BaseElementIconProps> = (props) => {
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
        d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m182.613333 297.354667a32 32 0 0 0-45.258666 0.032L458.922667 573.44l-84.341334-83.989333a32 32 0 0 0-45.162666 45.344l106.986666 106.549333a32 32 0 0 0 45.226667-0.064l213.013333-213.333333a32 32 0 0 0-0.032-45.258667z"
        fill="currentColor"
        p-id="26796"
      />
    </svg>
  );
};
