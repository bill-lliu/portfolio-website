import { Affix, Button, Modal, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Home = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);
  const [showHelpText, setShowHelpText] = useState(false);

  // update screen position
  useEffect(() => {
    if (currentScreen.name == "Home") {
      setTimeout(() => {
        open();
        console.log("opening ", opened);
      }, 1500);
    } else {
      close();
    }
  }, [currentScreen]);

  // hide help text when modal is open
  useEffect(() => {
    if (opened == true) {
      setShowHelpText(false);
    } else {
      // show help text after 6 seconds
      setTimeout(() => {
        if (opened == false && currentScreen.name == "Home") {
          setShowHelpText(true);
        }
      }, 6000);
    }
  }, [opened]);

  return (
    <>
      <Modal
        className={`intro ${opened == false ? "intro--disappear" : ""}`}
        centered
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <Title className="hero">Bill&apos;s Website</Title>
        <br />
        <Button
          className="explore"
          onClick={close}
          variant="gradient"
          gradient={{ from: "violet", to: "grape" }}
          size="xl"
        >
          Start
        </Button>
      </Modal>
      {showHelpText == true ? (
        <Affix position={{ left: "40%", bottom: "15%" }} zIndex={1}>
          <Stack
            gap={0}
            style={{
              color: "white",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            <i>&lt;- left-click + drag to orbit -&gt;</i>
            <i>&lt;- scroll-wheel up/down to zoom -&gt;</i>
            <i>&lt;- right-click + drag to pan -&gt;</i>
          </Stack>
        </Affix>
      ) : null}
    </>
  );
};

export default Home;
