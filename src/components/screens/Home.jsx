import { Affix, Center, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";

const Home = () => {
  const { currentScreen } = useScreenContext();
  const [opened, { open, close }] = useDisclosure(false);
  const [showHelpText, setShowHelpText] = useState(false);

  // update screen position
  useEffect(() => {
    if (currentScreen.name == "Home") {
      open();
      setTimeout(() => {
        setShowHelpText(true);
      }, 2000);
    } else {
      close();
      setShowHelpText(false);
    }
  }, [currentScreen, open, close]);

  // instructions for movement that will appear
  const HelpText = () => {
    return (
      <Affix
        className="helptext"
        // position={{ left: "40%", bottom: "15%" }}
        style={{
          width: "400px",
          left: "50%",
          marginLeft: "-200px",
          bottom: "15%",
        }}
        zIndex={1}
      >
        <Stack
          gap={0}
          align="center"
          style={{
            color: "white",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <i>&lt;- left-click + drag to orbit -&gt;</i>
          <i>&lt;- scroll-wheel to zoom -&gt;</i>
          <i>&lt;- right-click + drag to pan -&gt;</i>
        </Stack>
      </Affix>
    );
  };

  return (
    <>
      {opened ? (
        <Affix position={{ top: "6%", left: "0", right: "0" }}>
          <Center>
            <Title className="hero">Bill&apos;s Website</Title>
          </Center>
        </Affix>
      ) : null}

      {showHelpText == true ? <HelpText /> : null}

      {/* old intro modal */}
      {/* <Modal
        className={`intro ${opened == false ? "intro--disappear" : ""}`}
        centered
        opened={opened}
        onClose={() => {
          close();
          setShowHelpText(true);
        }}
        withCloseButton={false}
      >
        <Title className="hero">Bill&apos;s Website</Title>
        <Button
          onClick={() => {
            close();
            setShowHelpText(true);
          }}
          variant="gradient"
          gradient={{ from: "violet", to: "grape" }}
          size="xl"
        >
          Explore
        </Button>
      </Modal> */}
    </>
  );
};

export default Home;
