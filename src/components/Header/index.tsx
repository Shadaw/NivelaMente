import { ActiveLink } from 'components/ActiveLink';
import { Button } from 'components/Button';

import { Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="Nivela Mente" />
        <nav>
          <ActiveLink href="courses">Cursos</ActiveLink>
          <ActiveLink href="">Sobre</ActiveLink>
          <Button>Login</Button>
        </nav>
      </Content>
    </Container>
  );
};