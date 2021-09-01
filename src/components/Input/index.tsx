import { InputHTMLAttributes, forwardRef } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...rest }, ref) => {
    return (
      <Container>
        {title && <label htmlFor="">{title}</label>}
        <input ref={ref} {...rest} />
      </Container>
    );
  },
);
