import { ActiveLink } from 'components/ActiveLink';
import { LoginButton } from 'components/LoginButton';
import { ReactNode } from 'react';

import { Container } from './styles';

type FooterProps = {
  children: ReactNode;
}

export const Footer = ({children}: FooterProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
