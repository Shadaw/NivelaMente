import { ReactNode, useCallback, useState } from 'react';
import { FaSignOutAlt, FaPlus } from 'react-icons/fa';

import { Container, Title, Content, Overlay, DropdownItems } from './styles';
import { useAuth } from 'hooks/auth';
import { useRouter } from 'next/router';

type DropdownProps = {
  children: ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => {

  const { push } = useRouter();
  const { signOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = useCallback(() => {
    setIsOpen(false);
    signOut();
  }, [signOut]);

  const handleRedirect = useCallback((route: string) => {
    push(route);
    setIsOpen(false);
  }, [push]);

  return (
    <Container isOpen={isOpen}>
      <Title onClick={() => setIsOpen(!isOpen)}>{children}</Title>
      <Content aria-hidden={!isOpen}>
        <DropdownItems>
          <div onClick={()=> handleRedirect('/createcourse')}>
            <FaPlus />
            <p>Criar curso</p>
          </div>
        </DropdownItems>
        <DropdownItems>
          <div onClick={handleLogout}>
            <FaSignOutAlt />
            <p>Sair</p>
          </div>
        </DropdownItems>
      </Content>
      <Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </Container>
  );
};
