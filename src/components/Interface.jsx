import { Affix, Button, Stack } from "@mantine/core";
import { ScreenPositions, useScreenContext } from "../contexts/ScreenContext";

const Interface = () => {
  const { currentScreen, setCurrentScreen, cameraMode, setCameraMode } =
    useScreenContext();

  // console.log("currentScreen: ", currentScreen);
  // console.log("ScreenPositions: ", ScreenPositions);
  // Object.keys(ScreenPositions).map(() => console.log(currentScreen.name));
  // Object.keys(ScreenPositions).map((view) => console.log(view));

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
    </>
  );
};

export default Interface;
