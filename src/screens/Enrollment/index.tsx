import Head from 'next/head';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';

// import { Container, TextStyle, TitleStyle, TextContent } from './styles';
import { Container, TextContent } from './styles';

export const EnrollmentScreen = () => {
  return (
    <>
      <Head>
        <title>Descrição do Curso | Nivela Mente</title>
      </Head>
      <Header />
      <Container>
        {/* <img src="" alt="" /> */}
        <div>
          {/* <Button>Agua</Button>
          <Button>Agua</Button> */}
        </div>
        <TextContent>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </TextContent>
        <TextContent>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </TextContent>
        <TextContent>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </TextContent>
        <Footer>
          <Button type="submit">
            Inscrever-se
          </Button>
        </Footer>

      </Container>
    </>
  );
};
