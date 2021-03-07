import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1000px) {
        font-size: 70%;
    }
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
        background-color: #23d997;
        color: white;
    }
}
h2 {
    font-weight: lighter;
    font-size: 3rem;
}
h3 {
    color: white;
}
h4{
    font-weight: bold;
    font-size: 1.5rem;
}
span{
    font-weight: bold;
    color: #23d997;
}
a{
    font-size: 1.1.rem; 
}
p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.3rem;
    line-height: 150%
}
`;

export default GlobalStyle;