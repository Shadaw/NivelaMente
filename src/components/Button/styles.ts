import styled from 'styled-components';

type ContainerProps = {
  isRadius: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  min-height: 40px;
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
