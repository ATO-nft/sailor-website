// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1506 159"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1407.5 7.186c17.2-8.8 66.83 3.666 89.5 11l9 114.5-179.5 16h-369l-898 10-59.5-107c6.833-8.167 24.3-24.5 39.5-24.5 19 0 48 58.5 64 47s49.5-38 58.5-38 36 49.5 52.5 49.5 22.5-58.5 55.5-67.5 56 56 77.5 56 31.5-65 64-73c26-6.4 46.833 14.666 54 26 27.333 47.166 91 122.6 127 47 45-94.5 78.5-56 90-56s24.5 42.5 33.5 56 86.5 21.5 95.5-13.5 62-42.5 74.5-42.5 92 77.5 106.5 77.5 63-1 75.5-27 55-27 67.5-27 51.5 84.5 83 73 50.5-70.5 79.5-73 25 74.5 46.5 73 41.5-96.5 63-107.5z"
        }
        fill={"#358BC9"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
