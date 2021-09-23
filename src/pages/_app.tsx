import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

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
      <NextNprogress
        color="#3FA75D"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
