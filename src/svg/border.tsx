import React, { SVGProps } from "react";

type HeaderBorderSvgProps = SVGProps<SVGSVGElement>;
function BorderSvg(props: HeaderBorderSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      {...props}
    >
      <rect
        width="100%"
        height="100%"
        x="0"
        y="0"
        stroke="url(#paint0_linear_96_30)"
        rx="7.5"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_96_30"
          x1="0"
          x2="100%"
          y1="0"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0" stopColor="#ffffff30" stopOpacity="0"></stop>
          <stop offset={0.5} stopColor="#ffffff50"></stop>
          <stop offset="1" stopColor="#ffffff10" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BorderSvg;
