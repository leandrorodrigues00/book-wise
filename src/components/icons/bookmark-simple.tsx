import * as React from "react";
import { SVGProps } from "react";

const BookmarkSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 18 26" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.586 1.086A2 2 0 0 1 2 .5h14a2 2 0 0 1 2 2v22a1 1 0 0 1-1.53.848L9 20.679l-7.47 4.669A1 1 0 0 1 0 24.5v-22a2 2 0 0 1 .586-1.414ZM16 2.5H2v20.196l6.47-4.044a1 1 0 0 1 1.06 0L16 22.696V2.5Z"
    />
  </svg>
);

export default BookmarkSimple;
