import * as React from "react";
import { SVGProps } from "react";

const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 60" transform="rotate(10)" {...props}>
    <path
      style={{
        strokeLinejoin: "round",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeWidth: 4,
      }}
      d="m49.604 49.604-16.32-5.534-13.811 10.306.221-17.231-14.07-9.95L22.08 22.08l5.115-16.456 9.95 14.07 17.231-.221L44.07 33.284l5.534 16.32z"
    />
  </svg>
);

export default Star;
