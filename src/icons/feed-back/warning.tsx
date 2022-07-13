import React from 'react';

export const Warning: React.FC<BaseElementIconProps> = (props) => {
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
        d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m0 752a36 36 0 1 1 36-36 36 36 0 0 1-36 36z m51.83-551.95L548 636a36 36 0 0 1-72 0l-15.83-371.95c-0.1-1.33-0.17-2.68-0.17-4.05a52 52 0 0 1 104 0c0 1.37-0.07 2.72-0.17 4.05z"
        fill="currentColor"
        p-id="4854"
      />
    </svg>
  );
};
