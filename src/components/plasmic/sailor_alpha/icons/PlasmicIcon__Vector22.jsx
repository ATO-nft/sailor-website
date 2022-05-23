// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector22Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.691 3.902c0 .773-.224 1.528-.647 2.17a3.859 3.859 0 01-1.726 1.44 3.792 3.792 0 01-2.222.222 3.828 3.828 0 01-1.97-1.07A3.923 3.923 0 01.074 4.666a3.96 3.96 0 01.22-2.256A3.892 3.892 0 011.71.657 3.805 3.805 0 013.85 0a3.822 3.822 0 012.715 1.145 3.94 3.94 0 011.127 2.757zM3.85 6.398c.487.002.964-.144 1.37-.418a2.48 2.48 0 00.91-1.12 2.537 2.537 0 00-.527-2.728 2.453 2.453 0 00-1.26-.688 2.43 2.43 0 00-1.424.139 2.464 2.464 0 00-1.108.919 2.53 2.53 0 00-.419 1.39c.002.662.261 1.297.721 1.766.46.47 1.084.735 1.737.74z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
