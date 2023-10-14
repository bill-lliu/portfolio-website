import { Affix, Button, Stack } from "@mantine/core";
import { ScreenViews, useScreenContext } from "../contexts/ScreenContext";

const Interface = () => {
  const { screen, setScreen, cameraMode, setCameraMode } = useScreenContext();

  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Stack>
          {Object.keys(ScreenViews).map((view) => (
            <Button
              key={view}
              onClick={() => setScreen(ScreenViews[view])}
              variant={screen === view ? "gradient" : "light"}
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
