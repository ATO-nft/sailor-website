import * as React from "react";
import { PlasmicMinting } from "./plasmic/sailor_alpha/PlasmicMinting";

function Minting_(props, ref) {
  const { plasmicProps } = PlasmicMinting.useBehavior(props, ref);
  return <PlasmicMinting 
    root={{
      props: { ...plasmicProps,
      onClick: () => handleMintAgain()
      }
    }}
    />;
}

const Minting = React.forwardRef(Minting_);

export default Object.assign(Minting, {
  __plumeType: "button"
});

// Overrides
async function handleMintAgain() {
  console.log("You win AGAIN!")
}