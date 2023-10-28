import { Affix, Burger, Button, Group, Menu, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ScreenPositions } from "../contexts/CameraController";
import { useScreenContext } from "../contexts/ScreenContext";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Credits from "./screens/Credits";
import Home from "./screens/Home";
import Resume from "./screens/Resume";

const Overlay = () => {
  const { started, currentScreen, setCurrentScreen } = useScreenContext();
  const [menuOpened, { toggle: toggleMenu }] = useDisclosure(false);

  // navbar menu component
  const Navbar = () => {
    return (
      <>
        {/* horizontal navbar for wide view */}
        <Affix position={{ top: 20, left: 20 }} visibleFrom="sm">
          <Group position="center">
            {Object.keys(ScreenPositions).map((view) => (
              <Button
                key={view}
                className="nav_button"
                onClick={() => setCurrentScreen(ScreenPositions[view])}
                color={currentScreen.name == view ? "white" : "#F2EFBD"}
                variant={currentScreen.name == view ? "gradient" : "light"}
                gradient={{ from: "purple", to: "violet" }}
                disabled={
                  view == "Timeline" || view == "Services" || view == "Projects"
                }
                size="md"
              >
                <h4>{view}</h4>
              </Button>
            ))}
          </Group>
        </Affix>

        {/* vertical collapsable navbar for narrow view */}
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
                    className="nav_button"
                    onClick={() => setCurrentScreen(ScreenPositions[view])}
                    color={currentScreen.name == view ? "white" : "#F2EFBD"}
                    variant={currentScreen.name == view ? "gradient" : "light"}
                    gradient={{ from: "violet", to: "grape" }}
                    disabled={
                      view == "Timeline" ||
                      view == "Services" ||
                      view == "Projects"
                    }
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

  // main content of the overlay component
  const Screen = () => {
    return (
      <>
        {currentScreen.name == "Home" ? <Home /> : null}
        {currentScreen.name == "About" ? <About /> : null}
        {currentScreen.name == "Resume" ? <Resume /> : null}
        {currentScreen.name == "Contact" ? <Contact /> : null}
        {currentScreen.name == "Credits" ? <Credits /> : null}
      </>
    );
  };

  return (
    <>
      {started ? (
        <>
          <Navbar zIndex={3} />
          <Screen zIndex={2} />
        </>
      ) : null}
    </>
  );
};

export default Overlay;
