import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

import { Container, Content, Info } from './styles';

type TranslateCategoryOption = {
  [key: string]: string;
};

const TranslateCategory = {
  english: 'Inglês',
  math: 'Matemática',
  portuguese: 'Português',
} as TranslateCategoryOption;

type CardProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const Card = ({
  id,
  title,
  category,
  description,
  image,
}: CardProps) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <Content>
        <Info>
          <strong>{title}</strong>
          <p>{description}</p>
        </Info>
        <div>
          <p>{TranslateCategory[category]}</p>
          <Link href={`/course/${id}`}>
            <a>
              <FiArrowRight />
            </a>
          </Link>
        </div>
      </Content>
    </Container>
  );
};
