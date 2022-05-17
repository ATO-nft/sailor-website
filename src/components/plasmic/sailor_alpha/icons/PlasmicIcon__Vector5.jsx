// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.99 6.102H.264c-.09 0-.229-.03-.256-.088-.026-.058.023-.188.071-.265C1.263 3.898 2.45 2.049 3.64.203 3.7.128 3.767.059 3.843 0c.064.08.158.149.188.24.272.82.558 1.635.788 2.465.27.967.07 1.879-.452 2.724-.502.815-.185.661-1.142.676-.411.002-.823-.003-1.234-.003z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
