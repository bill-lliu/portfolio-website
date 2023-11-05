import { Button } from "@mantine/core";
import { Loader, useProgress } from "@react-three/drei";
import { useScreenContext } from "../../contexts/ScreenContext";

const LoadingScreen = () => {
  const { started, setStarted } = useScreenContext();
  const { progress } = useProgress();

  //   // activate global boolean on first user interaction
  //   const firstInteraction = () => {
  //     console.log("tracked click");
  //     document.body.removeEventListener("click", firstInteraction);
  //     setStarted(true);
  //   };
  //   document.body.addEventListener("click", firstInteraction);

  return (
    <div className={`cover ${started ? "cover--disappear" : ""}`}>
      <Loader
        containerStyles={{ background: "#A885F2" }} // Flex layout styles
        innerStyles={{ width: "40vw", height: "1vh", borderRadius: "1vh" }} // Inner container styles
        barStyles={{
          background: "#F2EFBD",
          width: "40vw",
          height: "1vh",
          borderRadius: "1vh",
        }} // Loading-bar styles
        dataStyles={{
          color: "#F2EFBD",
          fontSize: "1.5em",
          fontFamily: "Balsamiq Sans, sans-serif",
        }} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => active} // Initial black out state
      />

      <Button
        disabled={progress < 100}
        style={{
          position: "absolute",
          width: "120px",
          height: "60px",
          left: "50%",
          marginLeft: "-60px",
          top: "50%",
          marginTop: "-20px",
          zIndex: 1002,
        }}
        className="explore"
        onClick={() => {
          setStarted(true);
        }}
        variant="gradient"
        gradient={{ from: "violet", to: "grape" }}
        size="xl"
      >
        Start
      </Button>
    </div>
  );
};

export default LoadingScreen;
