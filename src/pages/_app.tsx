import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from 'hooks';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Nivela Mente</title>
        <meta name="description" content="Nivela Mente" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
