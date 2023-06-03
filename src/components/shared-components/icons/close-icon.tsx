import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.28 4.72a.75.75 0 0 1 0 1.06l-13.5 13.5a.75.75 0 0 1-1.06-1.06l13.5-13.5a.75.75 0 0 1 1.06 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.72 4.72a.75.75 0 0 1 1.06 0l13.5 13.5a.75.75 0 1 1-1.06 1.06L4.72 5.78a.75.75 0 0 1 0-1.06Z"
    />
  </svg>
);

export default CloseIcon;
