import styled, { css } from 'styled-components';

type ContainerProps = {
  size: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
      border-radius: calc(${size}px / 2);
    `}
`;
