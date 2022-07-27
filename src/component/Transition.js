import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0%{
        opacity:0;
        transfrom:translateY(20px);
    }
    100% {
        opacity:1;
        transfrom:translateY(0);
    }
`;

const StyledWrapper = styled.div`
  animation: ${fadeIn} 0.5s;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
