import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 20px;
`;

export const Text = styled.div`
  font-size: 72px;

  ::after {
    content: "";
    width: 40px;
    height: 60px;
    position: absolute;
    background-color: white;
    animation: ${blinkAnimation} 1s infinite;
  }
`;
