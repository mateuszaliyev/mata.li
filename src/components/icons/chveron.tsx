import type { IconProps } from "@/types";

export const ChevronIcon = ({ fill = "currentColor", ...props }: IconProps) => (
  <svg
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414-4.95-4.95Z" />
  </svg>
);
