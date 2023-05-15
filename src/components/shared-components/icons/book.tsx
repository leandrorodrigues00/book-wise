import * as React from "react";
import { SVGProps } from "react";

const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-8a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8V8h-8Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.586 6.586A2 2 0 0 1 4 6h8a5 5 0 0 1 5 5v18a1 1 0 1 1-2 0 3 3 0 0 0-3-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 .586-1.414ZM15 25V11a3 3 0 0 0-3-3H4v16h8a5 5 0 0 1 3 1Z"
    />
  </svg>
);

export default Book;
