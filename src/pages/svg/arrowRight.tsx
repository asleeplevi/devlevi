import React, { SVGProps } from "react";

type ArrowRightSvgProps = SVGProps<SVGSVGElement>;
function ArrowRightSvg(props: ArrowRightSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="#E6E6E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.62 3.953L13.667 8 9.62 12.047M2.333 8h11.22"
      ></path>
    </svg>
  );
}

export default ArrowRightSvg;
