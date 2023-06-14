import * as React from "react";
import { SVGProps } from "react";

const UserList = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0ZM18 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1ZM18 16a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1ZM21 22a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18.984a7 7 0 0 0-6.781 5.264 1 1 0 0 1-1.938-.496 9 9 0 0 1 17.438 0 1 1 0 0 1-1.938.496 7 7 0 0 0-6.78-5.264Z"
    />
  </svg>
);

export default UserList;
