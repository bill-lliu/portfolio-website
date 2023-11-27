import { Affix, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Resume = () => {
  const { currentScreen } = useScreenContext();
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    if (currentScreen.name == "Resume") {
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
            <Title className="title">Resume</Title>
            <div className="screen_text">
              <Text>
                <br />I plan on building an interactive Resume here in the near
                future, but until then, here is a{" "}
                <a
                  href="https://drive.google.com/file/d/16-VbQR61QQMYLCNNk_xKE8U3M0shY1Wv/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  PDF version
                </a>
                !
              </Text>
            </div>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Resume;
