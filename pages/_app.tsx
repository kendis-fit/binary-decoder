import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Pixeboy;
    src: url('/Pixeboy-z8XGD.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Pixeboy;
    background-color: black;
    color: #01ff00;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
