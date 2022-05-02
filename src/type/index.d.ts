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
