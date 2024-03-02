import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Experience } from "./Experience";
import { Overlay } from "./Overlay";
import { usePlay } from "../../contexts/Play";

import Pic from "../../../public/images/pexels-lukas-kloeppel.jpg";

function App() {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          src={Pic}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#3a36559e",
            zIndex: 1,
          }}
        ></div>
      </div>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 9.5s forwards",
            opacity: 1,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
