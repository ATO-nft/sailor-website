// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
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
          "M.854 1.764a.86.86 0 00.486-.14.895.895 0 00.152-1.356.865.865 0 00-.946-.205.871.871 0 00-.394.32.892.892 0 00-.152.49.887.887 0 00.244.626.862.862 0 00.61.265z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
