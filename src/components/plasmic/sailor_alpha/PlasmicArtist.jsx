// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
// Component: 4T390JcXEt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 9HJOL_ndHV/component
import { useScreenVariants as useScreenVariantsu0VQjvxy5SkDm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: U0vQjvxy5SKDm/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicArtist.module.css"; // plasmic-import: 4T390JcXEt/css
import sailorDark18PngXUXUumQo from "./images/sailorDark18Png.png"; // plasmic-import: xU-xUumQO/picture
import stickers16Png9TwHWhtu from "./images/stickers16Png.png"; // plasmic-import: 9tw-HWhtu/picture
import stickers12Png5RLjjTtzn from "./images/stickers12Png.png"; // plasmic-import: 5rLjjTTZN/picture
import stickers14PngFD9Cie6Fx from "./images/stickers14Png.png"; // plasmic-import: fD9CIE6Fx/picture

export const PlasmicArtist__VariantProps = new Array();

export const PlasmicArtist__ArgProps = new Array();

function PlasmicArtist__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign({}, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsu0VQjvxy5SkDm()
  });

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
            light={true}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"stickyMenu"}
              data-plasmic-override={overrides.stickyMenu}
              hasGap={true}
              className={classNames(projectcss.all, sty.stickyMenu)}
            >
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__jc0Hh
                )}
                href={"#childhood"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4HeT
                  )}
                >
                  {"Childhood & influence"}
                </div>
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__k5Pt3
                )}
                href={"#art"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__i6YoG
                  )}
                >
                  {"art  discovering"}
                </div>
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___58K9U
                )}
                href={"#web"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wta5Z
                  )}
                >
                  {"WEB 3"}
                </div>
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__dqRfF
                )}
                href={"#dev"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qkLjq
                  )}
                >
                  {"art developpement"}
                </div>
              </a>
            </p.Stack>
          ) : null}

          <div
            data-plasmic-name={"heroSection"}
            data-plasmic-override={overrides.heroSection}
            className={classNames(projectcss.all, sty.heroSection)}
          >
            {true ? (
              <div
                data-plasmic-name={"centerElement"}
                data-plasmic-override={overrides.centerElement}
                className={classNames(projectcss.all, sty.centerElement)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__prq0R)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"33%"}
                  loading={"lazy"}
                  src={{
                    src: sailorDark18PngXUXUumQo,
                    fullWidth: 3751,
                    fullHeight: 3962,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aw9UI
                  )}
                >
                  {"Scroll"}
                </div>
              </div>
            ) : null}
          </div>

          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"argumentSection"}
              data-plasmic-override={overrides.argumentSection}
              hasGap={true}
              className={classNames(projectcss.all, sty.argumentSection)}
            >
              <div
                data-plasmic-name={"childhood"}
                data-plasmic-override={overrides.childhood}
                className={classNames(projectcss.all, sty.childhood)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dDCi9)}
                    id={"childhood"}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__uiT5
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Childhood & Influence"
                        : "Childhood & Influence"}
                    </h2>

                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__tKbp
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__gZns9
                          )}
                        >
                          {
                            "I grew up with several obsessions. The first was drawing. My mother often painted at home, and would automatically draw beautiful portraits of women when she was on the phone. My father, during our time together, would often draw with me. I was able to watch him for hours and learn from him during my childhood. And when my friends at school found out that my father drew so well, my level of fame increased dramatically. I think that was the primary source of motivation that launched me on this quest for the line. I now realize how important it is to learn to draw early. It's such a complicated practice to master that if you didn't start when you were little, it's hard to accumulate hours of practice as an adult. I was lucky enough not to count my hours and to travel through my imagination all my childhood. "
                          }
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__riDvk
                          )}
                        >
                          {
                            'My childhood was a happy childhood. When I look back at it I really see a cliché of an 80\'s childhood like "Stranger Things", a pure product of generation Y. I grew up as a young person of a mixed race between the South of France and Corsica. My mother brought me the Corsican culture, taking me to the island of beauty at a very young age. My father never took the step of taking me to Cameroon. I have always felt a painful reluctance to go back there. So I never knew the African part of my mixed race. The funny thing is that I never suffered from the racism that is often self-generated by an inferiority complex. I grew up as a European child, far from my African roots, which I discovered much later as an adult. '
                          }
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tIhBq
                          )}
                        >
                          {
                            'As a kid, I also discovered the world of cinema that we devoured without moderation at home. Besides, I was much more into movies than cartoons... " Honey, I shrunk the kids ", " Willow ", " Mom I missed the plane ", " Bethoveen ", " The Goonies ", " Beattlejuice ", " Jurassic Park ", " Hook ", " Turtles ", " Back to the future ", " E.T " etc. I was rocked by the Hollywood movies of the 80s and 90s, which also got me hooked on the soundtrack of movies that I still listen to regularly today during my creative phases. I also grew up with the video game references that were flourishing. Nintendo with "Ninja Turtle", "Mario Bros" or "Double Dragon", the Mega-drive, the Gamegear, the Gameboy, the Super Nintendo, the Playstation, etc... I was addicted and amazed. My imagination flourished and turned my comic book scripts upside down. Comic books flourished on my parents\' shelves, serving as my first literature... " Gaston Lagaffe ", " Asterix ", " Tintin ", " Lucky Luke ", " Boule et Bill ", but especially the comics of Mr. Marcel Gotlib.  I have always been very impressed by the ability of this artist to draw expressions. He always impressed me a lot. I really learned to draw proportions thanks to him, and quite a lot of "Dragon Ball Z" I must admit. Moreover, I was obsessed with only one type of toy: the ones that were perfectly articulated and would allow me to imitate very realistic movements and aerial acrobatics (in the twists at least). This is what helped me to understand the movement and the apprehension of the human body in space.'
                          }
                        </div>
                      </p.Stack>
                    ) : null}
                  </p.Stack>
                ) : null}

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__o59B9)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: stickers16Png9TwHWhtu,
                    fullWidth: 830,
                    fullHeight: 259,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div
                data-plasmic-name={"art"}
                data-plasmic-override={overrides.art}
                className={classNames(projectcss.all, sty.art)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"text2"}
                    data-plasmic-override={overrides.text2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.text2)}
                    id={"art"}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__j6ODu
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Art discovering"
                        : "Art discovering"}
                    </h2>

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__evr0O
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__b5SyT)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={{
                            src: stickers12Png5RLjjTtzn,
                            fullWidth: 447,
                            fullHeight: 365,
                            aspectRatio: undefined
                          }}
                        />

                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__vkkrl
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__fPiOe
                              )}
                            >
                              {
                                "I used to spend a lot of time creating fictional characters and scenarios worthy of the greatest Hollywood movies. I could spend hours and hours researching references. Before each attempt at a comic book script, I would start by drawing each of the protagonists, and describing their characters. It was such a time-consuming process that I often ran out of steam after the fifth or sixth page of comics, constantly starting new scripts and never finishing a single story. For a long time, I saw my abortions as a curse... I came to the conclusion that my imagination was \nso fertile, that I would always be bored following a single scenario, making me perfectly incapable of ever finishing my comic book. In fact, it will be in 2021 that I will complete my first comic book, at the age of 34."
                              }
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__th4Rs
                              )}
                            >
                              {
                                "I perfected my drawing style during long hours of boredom in class. I was creating stories, literally escaping. I was often surprised at my ability to let 3 hours of the class go by without realizing it, I was even frustrated sometimes that it didn't last longer... my report card on the other hand suffered concretely. It was in 2001 that my life changed when I learned, independently of the guidance counselors, that applied arts apprenticeship programs existed, starting in the second year of high school. When I learned that, I was already in second grade but in another course so boring that I felt for the first time the notion of a nervous breakdown. When I learned this, I showed the most violent determination that I have ever shown to this day. I had to get out of there and into that school, it was a matter of life and death.  I asked to repeat a year and I did everything I could to get in. Unfortunately, the registration was already closed. But I insisted so much and showed my thirst to enter that I got my place by being the first on the waiting list. It changed my life. I was for the first time part of the best students, my enthusiasm carrying me on many sleepless nights to draw, create, and accomplish myself. During these 3 years of school, I was able to refine my style and approach it from a professional point of view. I was looking for excellence in my research, approaching all styles of techniques. It is in art classes that I was able to reconnect with the pleasure of my early childhood which was acrylic painting. Later on, while studying object design, I tried sculpture, which fascinated me as much as rough drawing."
                              }
                            </div>
                          </p.Stack>
                        ) : null}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>

              <div
                data-plasmic-name={"art2"}
                data-plasmic-override={overrides.art2}
                className={classNames(projectcss.all, sty.art2)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"text3"}
                    data-plasmic-override={overrides.text3}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.text3)}
                    id={"dev"}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__xeHqo
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Art developpment"
                        : "Art developpment"}
                    </h2>

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jjAuq
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__upko1
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__h314L
                              )}
                            >
                              {
                                "After my studies, I was able to work as a designer, stylist, and rough man, then as an art director in advertising. It is only after having exhausted my resources in the commercial world that I was able to return to painting. Indeed, after entering the professional world, \nI followed, as many do, the race for money, emptying myself little by little of my first dreams... After my second burnout, and redundancy, I had to spend a year alone in my small Parisian studio, alone with myself. I then started to draw for myself. Then to paint, then to do whatever I felt like doing creatively. \n \nWorking in advertising, I did a lot of sourcing, observing what many of my future competitors were doing. This gave me a certain philosophy of what would work for me \nand make me stand out. \nI needed a gimmick, a recognizable sign, a style. The lines and the wooden ribs were born, and then very quickly, the character of the sailor arrived, representing me perfectly. I am the sailor, the great dreamer, the loner, and the ambitious. With the dazzling success \nof my first collection which was sold in its entirety on the Champs-Elysées in 2013, I was launched into a frantic race with myself, a race to perfect my art and to express a still unexplored inner emotion. I had become a painter, and I finally had plenty of time to find myself.  "
                              }
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__qqFwj
                              )}
                            >
                              {
                                "It was only a few years later that I encountered the Parisian street art scene. In 2015 I made my first collages and then my first frescoes, roughly representing what I was already doing in the studio, but on surfaces 100 to 1000 times bigger. I was hooked, street art was part of me and Instagram became an important tool for lifestyle photo capture, my art in the street brought me under the spotlight very quickly, allowing me to perfect my art around the world. Thus, from a trip to trip, feeding myself with many adventures and encounters, my art became more mature, more colorful, more international, and more universal, defending multiple humanity, under the likeness of one God."
                              }
                            </div>
                          </p.Stack>
                        ) : null}
                      </div>
                    ) : null}

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ztB8)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: stickers14PngFD9Cie6Fx,
                        fullWidth: 544,
                        fullHeight: 140,
                        aspectRatio: undefined
                      }}
                    />
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"text4"}
                    data-plasmic-override={overrides.text4}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.text4)}
                    id={"web"}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__uB4B
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Web 3"
                        : "Web 3"}
                    </h2>

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__r2Gwt
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__xWsbC
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___2Q27Q
                              )}
                            >
                              {
                                "By nature, Sailor pushes the limits of reality and advocates freedom, so it is quite natural that he comes to bring his message to the world of the web.3. Values of this ecosystem are in perfect harmony with what he advocates: solidarity, travel, empowerment, decentralization, conquest, etc. Once adopted by the community, its story will finally be able to develop and live on."
                              }
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___7JzMe
                              )}
                            >
                              {
                                'I compelled the machine to create as I would have done before my mind could even imagine it. This is my digitized painting collection. I have digitally transcribed my brushstrokes so that I can make a "handmade" NFT collection. I used artificial intelligence to record an imprint of my soul and emotions when I paint. So, by digitizing enough information through the machine\'s algorithm that assists me, I get a series of thousands of combinations that could have come straight out of my mind. \nMy reflection was to keep a link with reality, the touch, and the movement that I normally apply to my creations, but this time, by transposing them into this new "de-meta-realized" world. '
                              }
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___2MtTn
                              )}
                            >
                              {
                                'So I asked myself how to keep a unique touch while playing the game of the collection?\nI wanted to create several portraits of my emblematic character "Sailor the sailor" \nby depicting him in the most natural way possible: with the brush tool; while using the digital tool that gives him a "collectible" dimension in NFT. Each work is unique and can find its physical double in my studio.'
                              }
                            </div>
                          </p.Stack>
                        ) : null}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            </p.Stack>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "stickyMenu",
    "heroSection",
    "centerElement",
    "argumentSection",
    "childhood",
    "art",
    "text2",
    "art2",
    "text3",
    "text4"
  ],

  header: ["header"],
  stickyMenu: ["stickyMenu"],
  heroSection: ["heroSection", "centerElement"],
  centerElement: ["centerElement"],
  argumentSection: [
    "argumentSection",
    "childhood",
    "art",
    "text2",
    "art2",
    "text3",
    "text4"
  ],

  childhood: ["childhood"],
  art: ["art", "text2"],
  text2: ["text2"],
  art2: ["art2", "text3", "text4"],
  text3: ["text3"],
  text4: ["text4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArtist__ArgProps,
      internalVariantPropNames: PlasmicArtist__VariantProps
    });

    return PlasmicArtist__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArtist";
  } else {
    func.displayName = `PlasmicArtist.${nodeName}`;
  }
  return func;
}

export const PlasmicArtist = Object.assign(
  // Top-level PlasmicArtist renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    stickyMenu: makeNodeComponent("stickyMenu"),
    heroSection: makeNodeComponent("heroSection"),
    centerElement: makeNodeComponent("centerElement"),
    argumentSection: makeNodeComponent("argumentSection"),
    childhood: makeNodeComponent("childhood"),
    art: makeNodeComponent("art"),
    text2: makeNodeComponent("text2"),
    art2: makeNodeComponent("art2"),
    text3: makeNodeComponent("text3"),
    text4: makeNodeComponent("text4"),
    // Metadata about props expected for PlasmicArtist
    internalVariantProps: PlasmicArtist__VariantProps,
    internalArgProps: PlasmicArtist__ArgProps
  }
);

export default PlasmicArtist;
/* prettier-ignore-end */
