import React, { SVGProps } from "react";

const ProjectsSvg = (props: SVGProps<SVGSVGElement>) => {
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
        fill="inherit"
        fillRule="evenodd"
        d="M2.842 0A1.23 1.23 0 001.74.68L.065 4.032A.615.615 0 000 4.308v10.461C0 15.45.551 16 1.23 16h13.54c.679 0 1.23-.551 1.23-1.23V4.307a.616.616 0 00-.065-.276L14.259.68a1.23 1.23 0 00-1.1-.68H2.841zm0 1.23h4.543v2.462H1.61l1.23-2.461zm5.773 2.462V1.231h4.543l1.23 2.461H8.616zM8 4.923h6.77v9.846H1.23V4.923H8zM5.538 7.385a.615.615 0 000 1.23h4.923a.615.615 0 100-1.23H5.538z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default ProjectsSvg;
