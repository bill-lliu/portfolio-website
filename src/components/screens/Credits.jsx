import { Affix, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Credits = () => {
  const { currentScreen } = useScreenContext();
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    if (currentScreen.name == "Credits") {
      setTimeout(() => {
        setOpen(true);
      }, 1500);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }
  }, [currentScreen]);

  return (
    <>
      {opened ? (
        <Affix className="screen">
          <Stack gap={0} align="center">
            <Title className="title">Credits</Title>
            <div className="screen_text">
              <Text>
                Development:
                <br />
                Website built by{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  me &#40;Siyi Bill Liu&#41;
                </a>
              </Text>

              <br />

              <Text>
                Models & Animations:
                <br />
                Original illustrations and textures by{" "}
                <a
                  href="https://www.patreon.com/ellievsbear"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ellie vs Bear
                </a>{" "}
                &#40;
                <a
                  href="https://www.instagram.com/ellievsbear/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ellievsbear
                </a>
                &#41; or at{" "}
                <a
                  href="https://www.ellievsbear.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ellievsbear.com
                </a>
                <br />
                Polygon models by{" "}
                <a
                  href="https://poly.pizza/u/Poly%20by%20Google"
                  target="_blank"
                  rel="noreferrer"
                >
                  Poly by Google
                </a>{" "}
                from{" "}
                <a href="https://poly.pizza/" target="_blank" rel="noreferrer">
                  poly.pizza
                </a>
                <br />
                Base model inspired by{" "}
                <a
                  href="https://www.linkedin.com/in/alexa-kruckenberg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alexa Kruckenberg
                </a>
                &apos;s{" "}
                <a
                  href="https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cloud Station
                </a>
                <br />
                Web model rebuilt/retextured by{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  me
                </a>
                <br />
                Animations rigged/keyframed by{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  me
                </a>
              </Text>

              <br />

              <Text>
                Music & Audio:
                <br />
                Background lofi{" "}
                <a
                  href="https://open.spotify.com/track/0eFT27m56zmqNY3hZtWIfn?si=085d4c1b43b741bb"
                  target="_blank"
                  rel="noreferrer"
                >
                  beggar/chooser
                </a>{" "}
                <br />
                produced by my boy{" "}
                <a
                  href="https://open.spotify.com/artist/1GvsikeftqirYkCOpcMoSR?si=XslHOzBpRZW-Ir10lF68TA"
                  target="_blank"
                  rel="noreferrer"
                >
                  hello
                </a>{" "}
                &#40;
                <a
                  href="https://www.instagram.com/hellodansong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @hellodansong
                </a>
                &#41; <br />
                with{" "}
                <a
                  href="https://open.spotify.com/artist/6sa0lNcq7YdXNnQKZHFb0D?si=XS9qZj42T7CFhTHEGiXtSA"
                  target="_blank"
                  rel="noreferrer"
                >
                  biosphere
                </a>{" "}
                &#40;
                <a
                  href="https://www.instagram.com/_biospheremusic_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @biospheremusic
                </a>
                &#41;
              </Text>

              <br />

              <Text>
                Special Thanks:
                <br />
                Inspiration and motivation from{" "}
                <a
                  href="https://www.linkedin.com/in/wassim-samad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wassim Samad
                </a>{" "}
                aka{" "}
                <a
                  href="https://www.youtube.com/@WawaSensei"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;Wawa Sensei&quot;
                </a>
              </Text>

              <br />

              <Text>
                License:
                <br />
                All works under{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CC-BY
                </a>
              </Text>
            </div>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Credits;
