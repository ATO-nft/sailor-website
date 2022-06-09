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
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 9HJOL_ndHV/component
import DiscoverButton from "../../DiscoverButton"; // plasmic-import: XuXn_eVAMfJ/component
import MintButton from "../../MintButton"; // plasmic-import: GeHxaxYhV01/component
import Footer from "../../Footer"; // plasmic-import: w_pxODdXjgL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicMint.module.css"; // plasmic-import: kmIJQ5z3TF/css

export const PlasmicMint__VariantProps = new Array();

export const PlasmicMint__ArgProps = new Array();

export const defaultMint__Args = {};

function PlasmicMint__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultMint__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__gy6JE)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__zwEqL
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

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__hlyV7)}>
                <DiscoverButton
                  className={classNames(
                    "__wab_instance",
                    sty.discoverButton__b8VR
                  )}
                >
                  <div
                    data-plasmic-name={"button1"}
                    data-plasmic-override={overrides.button1}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.button1
                    )}
                  >
                    {"Mint"}
                  </div>
                </DiscoverButton>
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___37Pd)}>
                <DiscoverButton
                  data-plasmic-name={"mintButton2"}
                  data-plasmic-override={overrides.mintButton2}
                  className={classNames("__wab_instance", sty.mintButton2)}
                >
                  {"Mint2"}
                </DiscoverButton>
              </div>
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox___9VpB)}>
              <MintButton
                className={classNames("__wab_instance", sty.mintButton__oXjw7)}
              >
                {"Mint"}
              </MintButton>
            </div>
          </div>

          {true ? (
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__nrzhT
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF" }}
                >
                  {"Test"}
                </span>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h1>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "button1", "mintButton2", "footer"],
  header: ["header"],
  button1: ["button1"],
  mintButton2: ["mintButton2"],
  footer: ["footer"]
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
    header: makeNodeComponent("header"),
    button1: makeNodeComponent("button1"),
    mintButton2: makeNodeComponent("mintButton2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicMint
    internalVariantProps: PlasmicMint__VariantProps,
    internalArgProps: PlasmicMint__ArgProps
  }
);

export default PlasmicMint;
/* prettier-ignore-end */
