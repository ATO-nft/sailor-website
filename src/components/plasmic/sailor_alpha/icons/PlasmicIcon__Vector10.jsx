// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.873 1.764a.858.858 0 01-.623-.263A.884.884 0 010 .863.893.893 0 01.276.237.867.867 0 01.91.001c.226.01.44.111.594.28a.89.89 0 01-.026 1.23.862.862 0 01-.605.253z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
