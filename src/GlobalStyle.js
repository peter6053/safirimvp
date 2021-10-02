import  {createGlobalStyle} from 'styled-components'

const  GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
*{
      padding: 0;
      margin:0;
      box-sizing: border-box;
    }
    
    body, html {
    font-size: 62.5%;
    font-family: 'IBM Plex Sans', sans-serif;
    }
    
    /* Padding Utilities */
    
    .py-small{padding: 2rem  0 !important;}
    .py-medium{padding: 4rem  0 !important;}
    .py-large{padding: 6rem  0 !important;}
    
    .px-small{padding: 0 2rem   !important;}
    .px-medium{padding: 0 4rem !important;}
    .px-large{padding: 0  6rem!important;}
    
    .p-small{padding: 2rem   !important;}
    .p-medium{padding: 4rem !important;}
    .p-large{padding: 6rem!important;}
    
    /* Button Utilities */

`
export default GlobalStyle;