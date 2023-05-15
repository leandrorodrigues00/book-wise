import * as React from "react";
import { SVGProps } from "react";

const SignOut = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.152 6.277a.625.625 0 0 1 .884 0l3.28 3.281a.625.625 0 0 1 0 .884l-3.28 3.281a.625.625 0 1 1-.884-.884L15.992 10l-2.84-2.84a.625.625 0 0 1 0-.883Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 10c0-.345.28-.625.625-.625h8.75a.625.625 0 1 1 0 1.25h-8.75A.625.625 0 0 1 7.5 10Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.866 2.866A1.25 1.25 0 0 1 3.75 2.5h4.375a.625.625 0 1 1 0 1.25H3.75v12.5h4.375a.625.625 0 1 1 0 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V3.75c0-.332.132-.65.366-.884Z"
    />
  </svg>
);

export default SignOut;
