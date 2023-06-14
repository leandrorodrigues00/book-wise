import * as React from "react";
import { SVGProps } from "react";

const Binoculars = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 8.625a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.723 4.623a3.01 3.01 0 0 1 4.233 0 .75.75 0 0 1 .159.231l4.097 9.31a.75.75 0 0 1-1.373.604l-4.034-9.165A1.51 1.51 0 0 0 15 5.508V15.75a.75.75 0 0 1-1.5 0V5.156c0-.2.08-.392.223-.533ZM6.044 4.623a3.01 3.01 0 0 1 4.234 0 .75.75 0 0 1 .222.533V15.75a.75.75 0 1 1-1.5 0V5.508a1.51 1.51 0 0 0-1.805.095l-4.033 9.165a.75.75 0 1 1-1.373-.605l4.096-9.309a.75.75 0 0 1 .16-.231Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18 12.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
    />
  </svg>
);

export default Binoculars;
