// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
import * as React from "react";
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, parallaxProviderWrapperProps } = props;
  return (
    <ParallaxProviderWrapper
      {...parallaxProviderWrapperProps}
      scrollAxis={
        parallaxProviderWrapperProps &&
        "scrollAxis" in parallaxProviderWrapperProps
          ? parallaxProviderWrapperProps.scrollAxis
          : undefined
      }
    >
      {children}
    </ParallaxProviderWrapper>
  );
}
