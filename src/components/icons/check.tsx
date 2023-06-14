import * as React from "react";
import { SVGProps } from "react";

const check = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.78 6.22a.75.75 0 0 1 0 1.06l-10.5 10.5a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l4.72 4.72 9.97-9.97a.75.75 0 0 1 1.06 0Z"
    />
  </svg>
);

export default check;
