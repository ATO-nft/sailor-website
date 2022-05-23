// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
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
          "M3.141 7.1a.63.63 0 01.188-.448.643.643 0 01.452-.186h1.067c.17 0 .333.067.453.186.12.12.188.28.188.45v4.002c.12-.035.275-.072.443-.111a.536.536 0 00.412-.516V5.519c0-.169.068-.33.188-.45a.644.644 0 01.454-.186h1.07a.646.646 0 01.593.392.63.63 0 01.048.244v4.602s.268-.107.528-.217a.533.533 0 00.327-.488V3.93c0-.169.067-.33.188-.45a.644.644 0 01.453-.185h1.07a.641.641 0 01.64.635v4.518c.926-.665 1.865-1.466 2.613-2.428a1.063 1.063 0 00.164-.996 7.468 7.468 0 00-1.61-2.646A7.55 7.55 0 0010.518.602a7.61 7.61 0 00-6.102.073A7.545 7.545 0 001.908 2.51 7.464 7.464 0 00.362 5.193a7.417 7.417 0 00.64 6.013.953.953 0 00.912.467c.201-.018.453-.043.753-.078a.534.534 0 00.473-.525V7.1m-.022 6.414a7.61 7.61 0 007.87.617 7.525 7.525 0 003.011-2.759 7.432 7.432 0 001.094-4.423c-2.759 4.078-7.854 5.984-11.975 6.565z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
