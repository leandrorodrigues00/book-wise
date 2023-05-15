import * as React from "react";
import { SVGProps } from "react";

const TrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a1 1 0 0 1 1 1v19h23a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.707 7.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0L12 15.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0L16 16.586l9.293-9.293a1 1 0 0 1 1.414 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9h-4a1 1 0 0 1-1-1Z"
    />
  </svg>
);

export default TrendingUp;
