import styled from "styled-components";
import { motion, motionValue, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVarients = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: `50%`, scale: 1 },
  drag: {
    backgroundColor: "rgba(46, 204, 113, 1.0)",
    transition: {
      duration: 10,
    },
  },
};

function App() {
  const x = useMotionValue(0);
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper>
      {/* <button onClick={() => x.set(200)}></button> */}
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
