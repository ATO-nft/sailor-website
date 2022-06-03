import * as React from "react";
import { PlasmicDiscoverButton } from "./plasmic/sailor_alpha/PlasmicDiscoverButton";

function DiscoverButton_(props, ref) {
  const { plasmicProps } = PlasmicDiscoverButton.useBehavior(props, ref);
  return <PlasmicDiscoverButton {...plasmicProps} />;
}

const DiscoverButton = React.forwardRef(DiscoverButton_);

export default Object.assign(DiscoverButton, {
  __plumeType: "button"
});
