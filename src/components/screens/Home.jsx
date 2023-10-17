import { Affix, Button, Modal, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Home = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  const [opened, { toggle, open, close }] = useDisclosure(false);

  useEffect(() => {
    if (currentScreen.name == "Home") {
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
      <Modal
        className={`intro ${opened === false ? "intro--disappear" : ""}`}
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
      {opened === false ? (
        <Affix position={{ left: "40%", bottom: "15%" }}>
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
