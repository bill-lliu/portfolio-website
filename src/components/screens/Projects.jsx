import { Affix, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Projects = () => {
  const { currentScreen } = useScreenContext();

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "Projects") {
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
        <Affix
          position={{ top: "15%", left: "20%" }}
          w="60%"
          h="70%"
          bg="rgba(121, 80, 242, 0.8)"
        >
          <Stack>
            <Title>Projects</Title>
            <Text>loren ipsum</Text>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Projects;
