import { Affix, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Projects = () => {
  const { currentScreen } = useScreenContext();
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    if (currentScreen.name == "Projects") {
      setTimeout(() => {
        setOpen(true);
      }, 1500);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }
  }, [currentScreen]);

  return (
    <>
      {opened ? (
        <Affix className="screen">
          <Stack gap={0} align="center">
            <Title className="title">Projects</Title>
            <div className="screen_text">
              <Text>
                <br />
                I plan on building an interactive projects showcase here soon,
                but until then:
                <br />
                GitHub:{" "}
                <a
                  href="https://github.com/bill-lliu"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/bill-lliu
                </a>
                <br />
                Devpost:{" "}
                <a
                  href="https://devpost.com/bill-lliu"
                  target="_blank"
                  rel="noreferrer"
                >
                  devpost.com/bill-lliu
                </a>{" "}
              </Text>
            </div>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Projects;
