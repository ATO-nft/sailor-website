import * as React from "react";
import { PlasmicMintButton } from "./plasmic/sailor_alpha/PlasmicMintButton";

function MintButton_(props, ref) {
  const { plasmicProps } = PlasmicMintButton.useBehavior(props, ref);
  return <PlasmicMintButton {...plasmicProps} />;
}

const MintButton = React.forwardRef(MintButton_);

export default Object.assign(MintButton, {
  __plumeType: "button"
});
