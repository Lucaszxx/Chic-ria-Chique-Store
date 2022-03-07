import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background: #B08968;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid black 1px;

    ul {
        display: flex;
        flex-direction: row;
        height: auto;
    }

    li {
        padding: 10px 70px;
        list-style: none;
        border: solid black 1px;
        border-radius: 10px;
        margin-left: 10px;
        color: black;
        background-color: #EDE0D4;
    }
`