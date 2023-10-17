import { Affix, Burger, Button, Group, Menu, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useProgress } from "@react-three/drei";
import { ScreenPositions } from "../contexts/CameraController";
import { useScreenContext } from "../contexts/ScreenContext";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

const Overlay = () => {
  const { currentScreen, setCurrentScreen } = useScreenContext();
  const [menuOpened, { toggle: toggleMenu }] = useDisclosure(false);
  const { progress } = useProgress();

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

  // main content of the overlay component
  const Screen = () => {
    return (
      <>
        {currentScreen.name == "Home" ? <Home /> : null}
        {currentScreen.name == "About" ? <About /> : null}
        {currentScreen.name == "Projects" ? <Projects /> : null}
        {currentScreen.name == "Contact" ? <Contact /> : null}
      </>
    );
  };

  return (
    <>
      <div className={`cover ${progress === 100 ? "cover--disappear" : ""}`} />
      {progress === 100 ? (
        <>
          <Navbar zIndex={3} />
          <Screen zIndex={2} />
        </>
      ) : null}
    </>
  );
};

export default Overlay;
