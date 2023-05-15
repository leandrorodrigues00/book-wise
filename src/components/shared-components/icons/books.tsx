import * as React from "react";
import { SVGProps } from "react";

const Books = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm6 0H6v20h4V6Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6Zm6 0h-4v20h4V6Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 22a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM16.382 7.203a2.009 2.009 0 0 1 1.42-2.46l3.88-1.04a2.009 2.009 0 0 1 2.46 1.42l5.2 19.4a2.008 2.008 0 0 1-1.42 2.46l-3.88 1.04a2.008 2.008 0 0 1-2.46-1.42l-5.2-19.4Zm5.82-1.56-3.88 1.04 5.2 19.4 3.88-1.04-5.2-19.4Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.165 20.577a1 1 0 0 1-.705 1.226l-5.8 1.563a1 1 0 0 1-.52-1.932l5.8-1.562a1 1 0 0 1 1.225.705ZM25.066 8.992a1 1 0 0 1-.708 1.224l-5.8 1.55a1 1 0 1 1-.516-1.932l5.8-1.55a1 1 0 0 1 1.224.708Z"
    />
  </svg>
);

export default Books;
