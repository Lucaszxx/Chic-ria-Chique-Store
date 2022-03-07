import React from "react";

import { Container } from "./NavBarStyle";

export const NavBar = () => {
    return (
        <>
            <Container>
                <ul>
                    <li>Disponíveis</li>
                    <li>Vendidos</li>
                    <li>Quem Somos</li>
                    <li>Fale Conosco</li>
                </ul>
            </Container>
        </>
    )
}