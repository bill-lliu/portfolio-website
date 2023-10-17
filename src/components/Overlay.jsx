import { Affix, Burger, Button, Group, Menu, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ScreenPositions } from "../contexts/CameraController";
import { useScreenContext } from "../contexts/ScreenContext";
import About from "./screens/About";

const Overlay = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  const [menuOpened, { toggle: toggleMenu }] = useDisclosure(false);

  const NavbarMenu = () => {
    return (
      <>
        {/* horizontal navbar for wide view */}
        <Affix position={{ top: 20, left: 20 }} visibleFrom="sm">
          <Group position="center">
            {Object.keys(ScreenPositions).map((view) => (
              <Button
                key={view}
                onClick={() => setCurrentScreen(ScreenPositions[view])}
                variant={currentScreen.name == view ? "gradient" : "light"}
                gradient={{ from: "violet", to: "grape" }}
                size="md"
              >
                <h4>{view}</h4>
              </Button>
            ))}
          </Group>
        </Affix>

        {/* vertical navbar for narrow view */}
        <Affix position={{ top: 20, left: 20 }} hiddenFrom="sm">
          <Menu
            opened={menuOpened}
            position="bottom-start"
            transitionProps={{
              transition: "slide-down",
              duration: 400,
              timingFunction: "ease",
            }}
            hiddenFrom="sm"
          >
            <Menu.Target>
              <Burger
                opened={menuOpened}
                onClick={toggleMenu}
                color="violet"
                transitionDuration={400}
                transitionTimingFunction="ease"
                aria-label="Toggle navigation"
                hiddenFrom="sm"
              />
            </Menu.Target>
            <Menu.Dropdown
              style={{ background: "none", border: "none" }}
              hiddenFrom="sm"
            >
              <Stack>
                {Object.keys(ScreenPositions).map((view) => (
                  <Button
                    key={view}
                    onClick={() => setCurrentScreen(ScreenPositions[view])}
                    variant={currentScreen.name == view ? "gradient" : "light"}
                    gradient={{ from: "violet", to: "grape" }}
                    size="md"
                  >
                    <h4>{view}</h4>
                  </Button>
                ))}
              </Stack>
            </Menu.Dropdown>
          </Menu>
        </Affix>
      </>
    );
  };

  const Viewport = () => {
    return (
      <>
        {currentScreen.name == "About" ? <About /> : null}
        {/* {currentScreen.name == "Projects" ? <Projects /> : null} */}
        {/* {currentScreen.name == "Contact" ? <Contact /> : null} */}
      </>
    );
  };

  return (
    <>
      <NavbarMenu zIndex={3} />
      <Viewport zIndex={2} />
    </>
  );
};

export default Overlay;
