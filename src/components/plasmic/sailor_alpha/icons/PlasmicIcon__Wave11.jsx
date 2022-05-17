// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Wave11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 153"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 45.9l8 10.184C16 66.46 32 86.541 48 91.8c16 5.26 32-5.26 48-7.65 16-2.39 32 2.39 48 15.3 16 12.909 32 32.991 48 43.366C208 153 224 153 240 130.05s32-68.85 48-71.384c16-2.725 32 38.393 48 40.784 16 2.391 32-32.99 48-40.784 16-7.507 32 12.575 48 25.484 16 12.91 32 17.691 48 10.184 16-7.793 32-27.875 48-28.018 16 .143 32 20.225 48 25.484 16 5.26 32-5.26 48-12.766 16-7.793 32-12.575 48 0 16 12.766 32 43.366 48 40.832 16-2.725 32-38.107 48-40.832 16-2.534 32 28.066 48 22.95 16-4.925 32-46.043 48-43.318 16 2.534 32 48.434 48 56.084 16 7.65 32-22.95 48-40.784 16-18.025 32-22.807 48-20.416 16 2.39 32 12.91 48 28.066 16 15.443 32 35.525 48 30.6 16-5.116 32-35.716 48-38.25 16-2.725 32 23.093 48 40.784s32 28.209 48 10.184c16-17.834 32-63.734 48-68.85 16-4.925 32 30.457 48 33.182 16 2.534 32-28.066 48-30.6 16-2.725 32 23.093 40 35.668l8 12.766V153H0V45.9z"
        }
        fill={"#A2D9FF"}
      ></path>
    </svg>
  );
}

export default Wave11Icon;
/* prettier-ignore-end */
