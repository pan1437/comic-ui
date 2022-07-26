import React from 'react';

export const Error: React.FC<BaseElementIconProps> = (props) => {
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
        d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m-86.474667 296.96a30.570667 30.570667 0 1 0-43.232 43.232L468.768 512l-86.474667 86.474667a30.570667 30.570667 0 1 0 43.232 43.232L512 555.232l86.474667 86.474667a30.570667 30.570667 0 1 0 43.232-43.232L555.232 512l86.474667-86.474667a30.570667 30.570667 0 1 0-43.232-43.232L512 468.768z"
        fill="currentColor"
        p-id="23762"
      />
    </svg>
  );
};
