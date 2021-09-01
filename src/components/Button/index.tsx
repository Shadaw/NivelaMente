import { ReactNode, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isRadius?: boolean;
};

export const Button = ({
  children,
  isRadius = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container isRadius={isRadius} {...rest}>
      {children}
    </Container>
  );
};
