import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />

        <title>Portfolio Leandro da silva</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
