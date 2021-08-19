import { ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};
