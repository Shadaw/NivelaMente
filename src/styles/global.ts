import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #3FA75D;

    --zero: #fff;
    --negative: #202020;

    --gray: #f5f5f5;
    --gray-200: #e6e6e6;
    --gray-300: #dadada;
    --gray-900: #717171;
    --background: #f5f5f5;

    --always-on-top: 11;
    --overlay: 10;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *[aria-hidden="true"] {
    visibility: hidden;
    position: absolute;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
