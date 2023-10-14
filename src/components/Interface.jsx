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
              onClick={() => setScreen(view)}
              variant={screen === view ? "gradient" : "light"}
              gradient={{ from: "violet", to: "grape" }}
              radius="lg"
              color="violet"
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
