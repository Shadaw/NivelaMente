import { ActiveLink } from 'components/ActiveLink';
import { LoginButton } from 'components/LoginButton';

import { Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="Nivela Mente" />
        <nav>
          <ActiveLink href="course">Cursos</ActiveLink>
          <ActiveLink href="">Sobre</ActiveLink>
          <LoginButton />
        </nav>
      </Content>
    </Container>
  );
};
