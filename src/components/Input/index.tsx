import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
};

export const Input = ({ title, ...rest }: InputProps) => {
  return (
    <Container>
      {title && <label htmlFor="">{title}</label>}
      <input {...rest} />
    </Container>
  );
};
