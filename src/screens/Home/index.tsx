import Head from 'next/head';
import Link from 'next/link';

import { Header } from 'components/Header';

import { Container, Hero } from './styles';

export const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Home | Nivela Mente</title>
      </Head>
      <Header />
      <Container>
        <Hero>
          <h1>Fique nivelado com o Nivelamente.</h1>
          <p>cursos de Português, Matemática e Inglês.</p>
          <Link href="/course">
            <a>Cursos</a>
          </Link>
        </Hero>
        <img src="/images/person.svg" alt="Mulher estudando" />
      </Container>
    </>
  );
};
