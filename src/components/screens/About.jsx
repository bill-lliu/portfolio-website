import { Affix, Stack, Text, Title } from "@mantine/core";

const About = () => {
  // const { currentScreen, setCurrentScreen, currentCameraMode, setCurrentCameraMode } =
  //   useScreenContext();
  // const About = ScreenPositions["About"];

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Affix
        zIndex={1}
        position={{ top: "15%", left: "20%" }}
        w="60%"
        h="70%"
        // bg="transparent"
        bg="violet"
      >
        <Stack bg="grape">
          <Title>about</Title>
          <Text>loren ipsum</Text>
        </Stack>
      </Affix>
    </>
  );
};

export default About;
