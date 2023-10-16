import { Affix, Button, Stack } from "@mantine/core";
import { ScreenPositions } from "../contexts/CameraController";
import { useScreenContext } from "../contexts/ScreenContext";
import About from "./screens/About";

const Interface = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Stack>
          {Object.keys(ScreenPositions).map((view) => (
            <Button
              key={view}
              onClick={() => setCurrentScreen(ScreenPositions[view])}
              variant={currentScreen.name == view ? "gradient" : "light"}
              gradient={{ from: "violet", to: "grape" }}
            >
              <h4>{view}</h4>
            </Button>
          ))}
        </Stack>
      </Affix>
      <Affix position={{ top: 20, left: 50 }}>
        {currentScreen.name == "About" ? <About /> : null}
      </Affix>
    </>
  );
};

export default Interface;
