import { Affix, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const About = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);

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
        <Affix className="screen">
          <Stack gap={0}>
            <Title className="title">About Myself</Title>
            <Text className="content">loren ipsum</Text>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default About;
