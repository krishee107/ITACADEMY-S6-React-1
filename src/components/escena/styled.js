import styled from "styled-components";

export const Frase = styled.div`
    border: solid 2px;
    padding: 10px;
    margin: 10px;
    border-radius: 25px;
    text-align: center;
    background-color: ${props => props.deseada ? '#f3a2a2' : 'white'};
    `;
