import * as React from "react";
import { SVGProps } from "react";

const MagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.063 3.125a5.938 5.938 0 1 0 0 11.875 5.938 5.938 0 0 0 0-11.875ZM1.875 9.063a7.187 7.187 0 1 1 14.375 0 7.187 7.187 0 0 1-14.375 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.261 13.261a.625.625 0 0 1 .884 0l3.797 3.797a.625.625 0 1 1-.884.884l-3.797-3.797a.625.625 0 0 1 0-.884Z"
    />
  </svg>
);

export default MagnifyingGlass;
