import styled from "styled-components";

export const Button = styled.button`
    padding: 20px;
    width: 50%;
    font-size: 20px;
    cursor: pointer;
`;

export const DivPadre = styled.div`
    background-image: url(${props => props.background});
    background-size: 100% 100%;
    padding: 10px;
    min-height: 100vh;
`;