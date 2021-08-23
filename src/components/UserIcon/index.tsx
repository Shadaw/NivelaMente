import { Container } from './styles';

type UserIconProps = {
  name: string;
  size?: number;
};

export const UserIcon = ({ name, size = 40 }: UserIconProps) => {
  return (
    <Container size={size}>
      <p>{name.substr(0, 1)}</p>
    </Container>
  );
};
