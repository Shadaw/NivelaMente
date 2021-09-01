import { InputHTMLAttributes, forwardRef } from 'react';

import { Container } from './styles';

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  title?: string;
};

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ title, ...rest }, ref) => {
    return (
      <Container>
        <label htmlFor={rest.name}>{title}</label>
        <input ref={ref} {...rest} id={rest.name} type="checkbox" />
      </Container>
    );
  },
);
