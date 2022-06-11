import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    
 
    img {
      width: 100%;
      display: block;
    }
  }


  
  ::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: rgba(255,255,255, 0.3); /* color of the tracking area */
    border-radius:1rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #fff; /* color of the scroll thumb */
    border-radius: 1.25rem; /* roundness of the scroll thumb */
    /*border: 3px solid orange; creates padding around scroll thumb*/
  }

`;
