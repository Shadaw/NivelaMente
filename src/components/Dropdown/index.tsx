import { ReactNode, useCallback, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { Container, Title, Content, Overlay, DropdownItems } from './styles';
import { useAuth } from 'hooks/auth';

type DropdownProps = {
  children: ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => {
  const { signOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = useCallback(() => {
    setIsOpen(false);
    signOut();
  }, [signOut]);

  return (
    <Container isOpen={isOpen}>
      <Title onClick={() => setIsOpen(!isOpen)}>{children}</Title>
      <Content aria-hidden={!isOpen}>
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
