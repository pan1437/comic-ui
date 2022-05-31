interface BaseElementProps {
  style?: React.CSSProperties;
  className?: string;
}

interface BaseElementIconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: (e: MouseEventHandler<SVGSVGElement>) => void;
}

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}