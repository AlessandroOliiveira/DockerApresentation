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


.scrolled {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}
`;
export default GlobalStyle;
