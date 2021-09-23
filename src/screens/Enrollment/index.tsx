import Head from 'next/head';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { UserIcon } from 'components/UserIcon';

import { Container, TextContent, ImgContent, UserField } from './styles';

type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const EnrollmentScreen = ({
  id,
  title,
  category,
  description,
  image,
}: Course) => {
  return (
    <>
      <Head>
        <title>Descrição do Curso | Nivela Mente</title>
      </Head>
      <Header />
      <Container>
        <ImgContent src={image} alt={title} />
        <UserField>
          <UserIcon name="Vanderlei" />
          <p>Vanderlei</p>
        </UserField>
        <TextContent>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextContent>
        <Footer>
          <Button type="submit">Inscrever-se</Button>
        </Footer>
      </Container>
    </>
  );
};
