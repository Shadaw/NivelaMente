import { ReactNode, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  radius?: boolean;
};

export const Button = ({ children, radius = false, ...rest }: ButtonProps) => {
  return (
    <Container radius={radius} {...rest}>
      {children}
    </Container>
  );
};
