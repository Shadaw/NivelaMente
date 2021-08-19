import Head from 'next/head';

import { Header } from 'components/Header';
import { Button } from 'components/Button';

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
          <h1>Lorem Ipsum is dummy the and typesetting. </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button>lorem ipsum</Button>
        </Hero>
        <img src="/images/person.svg" alt="Mulher estudando" />
      </Container>
    </>
  );
};
