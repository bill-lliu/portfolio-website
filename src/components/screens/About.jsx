import { Affix, Stack, Text, Title } from "@mantine/core";

const About = () => {
  // const { currentScreen, setCurrentScreen, cameraMode, setCameraMode } =
  //   useScreenContext();
  // const About = ScreenPositions["About"];

  return (
    <Affix position={{ top: 200, left: 200 }}>
      <Stack bg="grape">
        <Title>about</Title>
        <Text>loren ipsum</Text>
      </Stack>
    </Affix>
  );
};

export default About;
