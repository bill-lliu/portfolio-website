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
                  Siyi Bill Liu
                </a>
                <br />
                Model web rendering adaptation by{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siyi Bill Liu
                </a>
              </Text>

              <br />

              <Text>
                Models & Animations:
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
                Original illustrations and textures by{" "}
                <a
                  href="https://www.patreon.com/ellievsbear"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ellie
                </a>{" "}
                at{" "}
                <a
                  href="https://www.instagram.com/ellievsbear/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ellievsbear
                </a>{" "}
                or{" "}
                <a
                  href="https://www.ellievsbear.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ellievsbear.com
                </a>
                <br />
                Base model{" "}
                <a
                  href="https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cloud Station
                </a>{" "}
                by{" "}
                <a
                  href="https://www.linkedin.com/in/alexa-kruckenberg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alexa Kruckenberg
                </a>
                <br />
                Rigging and animations keyframed by{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siyi Liu
                </a>
              </Text>

              <br />

              <Text>
                Special Thanks:
                <br />
                Inspiration and motivation from{" "}
                <a
                  href="https://www.youtube.com/@WawaSensei"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>Wawa Sensei</i>
                </a>{" "}
                by{" "}
                <a
                  href="https://www.linkedin.com/in/wassim-samad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wassim Samad
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
