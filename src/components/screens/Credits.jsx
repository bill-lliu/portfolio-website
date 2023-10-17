import { Affix, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Credits = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "Credits") {
      setTimeout(() => {
        open();
      }, 1500);
    } else {
      setTimeout(() => {
        close();
      }, 200);
    }
  }, [currentScreen, open, close]);

  return (
    <>
      {opened ? (
        <Affix className="screen">
          <Stack gap={0}>
            <Title className="title">Credits</Title>
            <div className="contact_list">
              <Text>
                Developed by:{" "}
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
                Models and animations by:{" "}
                <a
                  href="https://www.linkedin.com/in/bill-lliu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siyi Liu
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/alexa-kruckenberg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alexa Kruckenberg
                </a>
              </Text>
              <br />
              <Text>
                Inspiration and motivation from:{" "}
                <a
                  href="https://www.linkedin.com/in/wassim-samad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wassim Samad
                </a>{" "}
                <a
                  href="https://www.youtube.com/@WawaSensei"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>&#40;Wawa Sensei&#41;</i>
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
