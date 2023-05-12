import React, { SVGProps } from "react";

type PageSvgProps = SVGProps<SVGSVGElement>;
function PageSvg(props: PageSvgProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 96 960 960" {...props}>
        <path
          d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Zm183 470 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
      </svg>
    </>
  );
}

export default PageSvg;
