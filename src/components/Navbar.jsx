import { Affix, Burger, Button, Group, Menu, Stack } from "@mantine/core";
import { useState } from "react";
import { useScreenContext } from "../contexts/ScreenContext";

// navbar menu component
const Navbar = () => {
  const { Screens, currentScreen, setCurrentScreen } = useScreenContext();
  const [menuOpened, setMenuOpen] = useState(false);

  return (
    <>
      {/* horizontal navbar for wide view */}
      <Affix position={{ top: 20, left: 20 }} visibleFrom="sm">
        <Group position="center">
          {Object.keys(Screens).map((view) => (
            <Button
              key={view}
              className="nav_button"
              onClick={() => setCurrentScreen(Screens[view])}
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
              onClick={() => setMenuOpen(!menuOpened)}
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
              {Object.keys(Screens).map((view) => (
                <Button
                  key={view}
                  className="nav_button"
                  onClick={() => setCurrentScreen(Screens[view])}
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

export default Navbar;
