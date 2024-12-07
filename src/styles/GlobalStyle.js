import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


// * css selecter der rammer alle/alt 
* {
    margin: 0;
    padding 0;
    box-sizing: border-box;

}
// henviser til vores root id i react 
#root {
    width: 100%;
    height: 100%; 
    display: contents;
}

:root {
     
    font-size: 16px;
    
    --text-color-light: black;
    --text-color-dark: white;
    --small-device: 640px;
    --medium-device: 968px;


}

header {
    padding: 1rem;
    width: 100%;
    max-width: var(--small-device);
    border-bottom: 1px solid silver;
}

main{
    padding: 2rem 1rem;
    width: 100%;
    max-width: var(--small-device);
    min-height: 80vh; // 100 is the the whole  height of the page.


}
footer{
    padding: 1rem;
    width: 100%;
    max-width: var(--small-device);
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid silver;

}

/* ----------Wireframe--------------- */

body{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    width: 100%;
}

h1{
    font-size: 2rem; // 2rem betyder 2 * defeault size 
    color: var(--text-color-light)
}

h2{
    font-size: 1.5rem;
}

p{
    font-size: 1rem;
}

`;

export default GlobalStyle;
