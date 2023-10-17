import { Affix, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Resume = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "Resume") {
      setTimeout(() => {
        open();
      }, 1500);
    } else {
      setTimeout(() => {
        close();
      }, 200);
    }
  }, [currentScreen, open, close]);

  return (
    <>
      {opened ? (
        <Affix className="screen">
          <Stack gap={0}>
            <Title className="title">Resume</Title>
            <Text className="content">
              I plan on building an interactive Resume here in the near future,
              but until then, I hope a lamer{" "}
              <a
                href="https://drive.google.com/file/d/143hGgYdllWrADoPRR9ain-MD1eEiIoke/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                PDF version
              </a>{" "}
              will suffice.
            </Text>
            <br />
            <Text className="content">
              {" "}
              <i>
                &#40;In the offchance the link doesn&apos;t work&#41;:
                <br />
                <a
                  href="https://drive.google.com/file/d/143hGgYdllWrADoPRR9ain-MD1eEiIoke/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://drive.google.com/file/d/143hGgYdllWrADoPRR9ain-MD1eEiIoke/view?usp=sharing
                </a>
              </i>
            </Text>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Resume;
