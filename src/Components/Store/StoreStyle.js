import styled from "styled-components"

export const Products = styled.div `
    margin-top: 5px;
    padding: 10px;
    display: grid;
    grid-template-columns: 0.75fr 0.75fr 0.75fr 0.75fr 0.75fr;
    grid-auto-rows: 200px;
    grid-column-gap: 10px;
    grid-row-gap: 150px;
    background-color: white;
    

    div {
        background-color: #80cbc4;
        border: 1px solid white;
        border-radius: 10px;        
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    p {
        margin-top: -2px;
    }

    h2 {
        color: Green;
        margin-top: -15px;
    }
    `