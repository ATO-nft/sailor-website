// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
// Component: kmIJQ5z3TF
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import MyHeader from "../../MyHeader"; // plasmic-import: sfUx3YtoOJF/component
import Button from "../../Button"; // plasmic-import: XuXn_eVAMfJ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicMint.module.css"; // plasmic-import: kmIJQ5z3TF/css

export const PlasmicMint__VariantProps = new Array();

export const PlasmicMint__ArgProps = new Array();

function PlasmicMint__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <MyHeader
            data-plasmic-name={"myHeader"}
            data-plasmic-override={overrides.myHeader}
            className={classNames("__wab_instance", sty.myHeader)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__gy6JE)}>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF" }}
                >
                  {"Hello mint"}
                </span>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox__hlyV7)}>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                {"Mint"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "myHeader", "h1", "button"],
  myHeader: ["myHeader"],
  h1: ["h1"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMint__ArgProps,
      internalVariantPropNames: PlasmicMint__VariantProps
    });

    return PlasmicMint__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMint";
  } else {
    func.displayName = `PlasmicMint.${nodeName}`;
  }
  return func;
}

export const PlasmicMint = Object.assign(
  // Top-level PlasmicMint renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    myHeader: makeNodeComponent("myHeader"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicMint
    internalVariantProps: PlasmicMint__VariantProps,
    internalArgProps: PlasmicMint__ArgProps
  }
);

export default PlasmicMint;
/* prettier-ignore-end */