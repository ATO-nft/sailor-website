import * as React from "react";
import { PlasmicButton } from "./plasmic/sailor_alpha/PlasmicButton";

function Button_(props, ref) {
  const { plasmicProps } = PlasmicButton.useBehavior(props, ref);
  return <PlasmicButton 
    root={{
      props: { ...plasmicProps,
      onClick: () => handleMint()
      }
    }}
    />;
}

const Button = React.forwardRef(Button_);

export default Object.assign(Button, {
  __plumeType: "button"
});

// Overrides
async function handleMint() {
  console.log("You win!")
}

