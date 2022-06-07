import * as React from "react";
import { PlasmicGallery } from "./plasmic/sailor_alpha/PlasmicGallery";

function Gallery2_(props, ref) {

  const [selectedImage, setSelectedImage] = React.useState("/static/media/nft3.c7c303aee467b2239233.png");

  async function switchImage(newSrc) {
    setSelectedImage(newSrc);
  }

  return <PlasmicGallery

  bigImage={{
    render: () => 
    <div>
      <bigImage>
        <img 
          alt={""}
          className={props.className} 
          decoding={"async"}
          loading={"lazy"}
          src = {selectedImage}
          style={{ maxWidth:"100%", maxHeight:"850px" }}
        />
      </bigImage>
    </div>
  }}

    // alt="" 
    // id="FocusImg" 
    // loading="lazy" 
    // class="__wab_img" 
    // decoding="async" 
    // src="/static/media/nft3.c7c303aee467b2239233.png" 
    // style="width: 0px; height: 0px;"

  _1= {{
    onClick: () => switchImage("/static/media/masque2.fd7e7f2c025c863828b3.png")
  }}

  _2= {{
    onClick: () => switchImage("/static/media/masque4.159e920aab4a7e9ae3a2.png")
  }}
  
  _3= {{
    onClick: () => switchImage("/static/media/masque6.87da95bfba3e60428ac6.png")
  }}

  _4= {{
    onClick: () => switchImage("/static/media/masque7.070fadb9b68da4a18d3a.png")
  }}

  _5= {{
    onClick: () => switchImage("/static/media/masque8.a342f689339d1a780496.png")
  }}

  _6= {{
    onClick: () => switchImage("/static/media/masque9.0736daa24ce42c322a48.png")
  }}

  _7= {{
    onClick: () => switchImage("/static/media/masque11.0d15aa7668d23aa47ea8.png")
  }}

  _8= {{
    onClick: () => switchImage("/static/media/masque12.4830e80068c10750fc0f.png")
  }}

  _9= {{
    onClick: () => switchImage("/static/media/masque14.e0bc61e01ef1919906c4.png")
  }}

  _10= {{
    onClick: () => switchImage("/static/media/masque15.4f7abad665179db59f95.png")
  }}

  _11= {{
    onClick: () => switchImage("/static/media/masque18.fa1bf42d2979fbbc30e0.png")
  }}

  _12= {{
    onClick: () => switchImage("/static/media/nft2.74f684c63561dfbc029b.png")
  }}
  
  />;
}

const Gallery = React.forwardRef(Gallery2_);

export default Gallery;
