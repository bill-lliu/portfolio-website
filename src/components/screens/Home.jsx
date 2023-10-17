import { Button, Title } from "@mantine/core";
import { useScreenContext } from "../../contexts/ScreenContext";

const Home = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  return (
    <div className="overlay" style={{ zIndex: 2 }}>
      <div className="intro">
        <Title className="hero">Bill&apos;s Website</Title>
        <Button
          className="explore"
          variant="gradient"
          gradient={{ from: "violet", to: "grape" }}
          size="md"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Home;
