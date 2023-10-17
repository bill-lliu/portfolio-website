import { Affix, Stack, Text, Title, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const About = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  const [opened, { toggle, open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "About") {
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
        <Transition
          mounted={opened}
          transition="slide-up"
          duration={600}
          timingFunction="ease"
        >
          {(styles) => (
            <div
              style={{ bg: "rgba(121, 80, 242, 0.8)", zIndex: 4, ...styles }}
            >
              <Affix
                position={{ top: "15%", left: "20%" }}
                w="60%"
                h="70%"
                bg="rgba(121, 80, 242, 0.8)"
              >
                <Stack>
                  <Title>about</Title>
                  <Text>loren ipsum</Text>
                </Stack>
              </Affix>
            </div>
          )}
        </Transition>
      ) : null}
    </>
  );
};

export default About;
