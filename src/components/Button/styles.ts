import styled, { keyframes } from 'styled-components';

type ContainerProps = {
  isRadius: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  min-height: 45px;
  min-width: 165px;
  border: none;
  border-radius: ${({ isRadius }) => (isRadius ? '30px' : '5px')};
  padding: 10px 40px;

  font-weight: bold;
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  animation: ${rotate} 3.5s linear infinite;

  svg {
    width: 18px;
    height: 18px;
    color: #ffffff;
  }
`;
