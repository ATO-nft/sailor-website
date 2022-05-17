// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.45 0h3.028c.869 0 1.703.159 2.449.632 1.218.77 1.835 1.913 1.957 3.348.024.275.022.552.022.828v5.81c0 .887-.147 1.74-.602 2.51-.655 1.112-1.649 1.719-2.886 1.93-.323.051-.65.076-.976.073-2.019.007-4.038 0-6.056 0-.996 0-1.921-.243-2.73-.853-.958-.724-1.463-1.713-1.61-2.9-.03-.28-.044-.56-.04-.842 0-2.1-.017-4.201.006-6.301.014-1.264.44-2.37 1.403-3.217A3.873 3.873 0 013.887.03C5.072-.01 6.26.021 7.446.021L7.45 0zm0 13.736h2.812a6.71 6.71 0 00.68-.026c1.108-.121 1.946-.645 2.4-1.712a3.42 3.42 0 00.24-1.357V4.628a4.97 4.97 0 00-.032-.657c-.118-.882-.48-1.624-1.242-2.114a2.952 2.952 0 00-1.63-.45c-2.112-.004-4.225-.004-6.337 0-.172 0-.344.013-.514.036-1.066.15-1.851.681-2.242 1.73a3.678 3.678 0 00-.206 1.296v6.164c-.001.26.02.518.063.773.176 1.02.715 1.75 1.692 2.117.408.147.84.218 1.272.211 1.014.003 2.029.004 3.044.002z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
