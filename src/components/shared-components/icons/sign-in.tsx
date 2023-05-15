import * as React from "react";
import { SVGProps } from "react";

const SignIn = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.402 6.277a.625.625 0 0 1 .884 0l3.28 3.281a.625.625 0 0 1 0 .884l-3.28 3.281a.625.625 0 1 1-.884-.884L10.242 10l-2.84-2.84a.625.625 0 0 1 0-.883Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 10c0-.345.28-.625.625-.625h8.75a.625.625 0 1 1 0 1.25h-8.75A.625.625 0 0 1 1.75 10Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3.125c0-.345.28-.625.625-.625H15.5a1.25 1.25 0 0 1 1.25 1.25v12.5a1.25 1.25 0 0 1-1.25 1.25h-4.375a.625.625 0 1 1 0-1.25H15.5V3.75h-4.375a.625.625 0 0 1-.625-.625Z"
    />
  </svg>
);

export default SignIn;
