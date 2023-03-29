import React, { SVGProps } from "react";

const LogoSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        stroke={props.stroke || "white"}
        d="M9 15.45v-4.897m0 4.897C9 16.306 8.254 17 7.333 17H1V9.003h6.333c.92 0 1.667.694 1.667 1.55m0 4.897c0 .856.746 1.55 1.667 1.55h4.666c.92 0 1.667-.694 1.667-1.55v-4.897c0-.856-.746-1.55-1.667-1.55h-4.666c-.92 0-1.667.694-1.667 1.55M1 8.997V1h8v6.447c0 .856-.746 1.55-1.667 1.55H1z"
      ></path>
    </svg>
  );
};

export default LogoSvg;
