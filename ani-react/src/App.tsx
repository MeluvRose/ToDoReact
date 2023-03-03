import styled from "styled-components";
import { motion } from "framer-motion";

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
  border-radius: 10px;
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
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVarients}
        whileDrag="drag"
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default App;
