import { InputHTMLAttributes, forwardRef, TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  title?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ title, ...rest }, ref) => {
    return (
      <Container>
        {title && <label htmlFor="">{title}</label>}
        <textarea ref={ref} {...rest} />
      </Container>
    );
  },
);
