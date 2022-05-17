// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1492 175"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1404.52 12.13c76-8.4 89.67 41.5 87 67.5l-551.001 95c-315.167-9.833-944.5-40.9-940.5-86.5 5-57 63.5-29 78-29s75.5 35.5 119 29 57-53.5 81.5-63.5 66.5 0 101 34.5 86.5 32 100.5 29 66.5-57 90-59 42 40.5 87 40.5 51.5-29.5 97-29.5 54 39.5 90.5 29.5 32-57.5 85.5-68.5 79.501 61.5 96.501 78.5 87.5-33.5 116.5-39.5 36.5 39.5 125.5 39.5 41-57 136-67.5z"
        }
        fill={"#2A648E"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
