import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Inter from '../../../assets/fonts/Inter.ttf'
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #101026;

}

@font-face {
  font-family: 'Inter';
  src:url(${Inter}) format('truetype');
}

body {
  font-family: 'Inter', sans-serif;
}
`;
export default GlobalStyle;
