import { ReactNode, ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container, Loading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isRadius?: boolean;
  loading?: boolean;
};

export const Button = ({
  children,
  isRadius = false,
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container isRadius={isRadius} {...rest}>
      {!loading && children}
      {loading && (
        <Loading>
          <FiLoader />
        </Loading>
      )}
    </Container>
  );
};
