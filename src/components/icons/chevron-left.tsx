import * as React from "react";
import { SVGProps } from "react";

const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 20 25" {...props}>
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.567 3.308a.625.625 0 0 1 0 .884L7.759 10l5.808 5.808a.625.625 0 1 1-.884.884l-6.25-6.25a.625.625 0 0 1 0-.884l6.25-6.25a.625.625 0 0 1 .884 0Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-4}
        y={0}
        width={28}
        height={28}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2360_704"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2360_704"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ChevronLeft;
