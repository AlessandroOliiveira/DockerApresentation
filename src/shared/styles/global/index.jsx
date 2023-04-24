import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #101026;

}
`;
export default GlobalStyle;
  