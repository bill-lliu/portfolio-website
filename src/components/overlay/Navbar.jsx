import {
  Affix,
  Burger,
  Button,
  Group,
  Menu,
  Stack,
  Tooltip,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

// navbar menu component
const Navbar = () => {
  const { Screens, currentScreen, setCurrentScreen } = useScreenContext();
  const [menuOpened, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 8000);
    }, 4000);
  }, []);

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
              disabled={view == "Timeline" || view == "Services"}
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
            <Tooltip
              label="try using the menu!"
              opened={showTooltip}
              position="right"
              offset={20}
              withArrow
              arrowSize={16}
              radius={8}
              color="#E285E5"
              transitionProps={{
                transition: "slide-left",
                duration: 2000,
              }}
            >
              <Burger
                opened={menuOpened}
                onClick={() => setMenuOpen(!menuOpened)}
                color="#1E0540"
                transitionDuration={400}
                transitionTimingFunction="ease"
                aria-label="Toggle navigation"
                hiddenFrom="sm"
              />
            </Tooltip>
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
                  disabled={view == "Timeline" || view == "Services"}
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
