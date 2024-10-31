import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0%, 20%, 100% {
    top: 8px;
    opacity: 1;
  }
  50% {
    top: 24px;
    opacity: 0;
  }
`;

export const ScrollContainer = styled.div<{ isVisible: boolean }>`
  text-align: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export const Mouse = styled.div`
  width: 24px;
  height: 40px;
  border: 2px solid #0FA4AF;
  border-radius: 12px;
  position: relative;
  margin: 55rem auto 8px;
`;

export const ScrollDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #6b5635;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${scrollAnimation} 1.5s infinite;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #6b5635;
`;



