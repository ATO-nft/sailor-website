import * as React from "react";
import { PlasmicMinting } from "./plasmic/sailor_alpha/PlasmicMinting";

function Minting_(props, ref) {
  const { plasmicProps } = PlasmicMinting.useBehavior(props, ref);
  return <PlasmicMinting {...plasmicProps} />;
}

const Minting = React.forwardRef(Minting_);

export default Object.assign(Minting, {
  __plumeType: "button"
});
