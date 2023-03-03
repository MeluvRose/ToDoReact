import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
  const gradient = useTransform(
    x,
    [-400, 400],
    [
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221,0,238))",
      "linear-gradient(135deg, rgb(122, 233, 248), rgb(67, 125, 234))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    rotateZ.onChange(() => console.log(rotateZ.get()));
  }, [x]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
