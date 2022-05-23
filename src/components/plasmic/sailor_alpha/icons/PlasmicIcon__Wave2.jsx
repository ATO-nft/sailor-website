// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Wave2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 88"}
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
          "M0 8.8l10 11.742c10 11.633 30 35.283 50 42.516 20 7.342 40-1.458 60-13.2 20-11.633 40-26.483 60-24.915C200 26.4 220 44 240 45.457c20 1.567 40-13.283 60-14.658s40 10.175 60 17.6c20 7.425 40 10.175 60 4.4s40-20.625 60-26.4c20-5.775 40-3.025 60-4.4 20-1.375 40-7.425 60 2.942C620 35.2 640 61.6 660 63.058c20 1.568 40-22.082 60-23.457s40 18.975 60 24.943c20 5.857 40-2.943 60-10.286 20-7.232 40-13.282 60-10.257 20 3.025 40 14.575 60 17.6 20 3.025 40-3.025 60-5.858 20-2.942 40-2.942 60-2.942s40 0 60-2.942c20-2.833 40-8.883 60-17.6 20-8.883 40-20.433 60-13.2C1280 26.4 1300 52.8 1320 66c20 13.2 40 13.2 60 5.858 20-7.233 40-22.083 50-29.316l10-7.342V88H0V8.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Wave2Icon;
/* prettier-ignore-end */
