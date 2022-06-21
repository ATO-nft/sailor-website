// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector43Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 420 225"}
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
          "M126.988 62.39S132.054 0 149.277 0c5.065 0-4.053 26.883 9.624 46.158 6.079 7.102 17.223 4.058 31.407 4.058 35.996 0 93.78.127 142.344 18.26 29.887 11.16 46.603 35.507 46.603 35.507s47.111 30.941 40.019 39.564c-3.673 4.464-42.045-30.434-42.045-30.434s-6.078 5.073-48.63.508c-56.952-6.113-84.595 14.709-129.173 36.013-42.657 20.386-48.63 21.304-48.63 21.304s24.315 5.58 13.678 15.724c-8.536 8.116-24.873 12.849-52.176 11.16-20.516-1.268-48.377 10.905-58.761 16.738-21.008 11.799-46.097 11.16-51.67 5.58-6.843-6.853 5.573-54.781 29.887-81.665 39.73-43.931 65.854-61.882 95.234-76.085z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
