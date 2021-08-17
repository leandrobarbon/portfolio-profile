import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      
  }

  body { 
    background: linear-gradient(359deg, #171d25, #000000);
    background-size: 400% 400%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
      font: 16px Roboto, sans-serif;
  }

  #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
      
  }

  button {
      cursor: pointer;
  }

  li{
      list-style: none;
  } 
`;
