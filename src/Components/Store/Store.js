import React from "react";
import { Products } from "./StoreStyle";
import Product1 from "../../img/CamisaFriends.jpg";
import Product2 from "../../img/JeansOld.jpg";
import Product3 from "../../img/SaiaAzul.jpg";
import Product4 from "../../img/CalçaVermelha.jpg"
import Product5 from "../../img/CalçaCinzaOld.jpg";
import Product6 from "../../img/CalçaBranca.jpg";
import Product7 from "../../img/CalçaCinza2old.jpg";
import Product8 from "../../img/BlusaVermelha.jpg";
import Product9 from "../../img/BlazerLIistradoCinza.jpg";
import Product10 from "../../img/SueterVerde.jpg";


export const Store = () => {
    return (
        <Products>
            <div>
                <img src={Product1}></img>
                <p>Camisa Friends vintage <br/>Veste: PP/P <br/> Cinza Mescla</p>
                <h2>R$25,00</h2>
            </div>
            <div>
                <img src={Product2}></img>
                <p>Calça jeans Clochard <br/>Veste: 38/40 <br/> Cinto de brinde</p>
                <h2>R$40,00</h2>
            </div>
            <div>
                <img src={Product3}></img>
                <p>Saia de pregas preta, super em alta <br/>Veste: P <br/> Boa para cosplay</p>
                <h2>R$25,00</h2>
            </div>
            <div>
                <img src={Product4}></img>
                <p>Calça bordô de veludo<br/> corte reto <br/> Veste: M/G </p>
                <h2>R$28,00</h2>
            </div>
            <div>
                <img src={Product5}></img>
                <p>Calça mini xadrez de lã<br/>possuí bolso faca dos lados<br/>Veste: 40/42</p>
                <h2>RS$30,00</h2>
            </div>
            <div>
                <img src={Product6}></img>
                <p>Calça branca flare com elastano<br/>Veste: 36 <br/>Branca</p>
                <h2>R$30,00</h2>
            </div>
            <div>
                <img src={Product7}></img>
                <p>Calça em alfaiataria bege<br/>Tamanho: M <br/> Bege</p>
                <h2>R$35,00</h2>
            </div>
            <div>
                <img src={Product8}></img>
                <p>Cardigã Cropped<br/>Veste: PP/P <br/> Vermelho</p>
                <h2>R$21,00</h2>
            </div>
            <div>
                <img src={Product9}></img>
                <p>Blazer Zara<br/>Veste: 36 até 40 <br/>Cinza com Risca de giz em lã</p>
                <h2>R$78,00</h2>
            </div>
            <div>
                <img src={Product10}></img>
                <p>Sueter Vintage<br/>Veste: G <br/>Verde Escuro</p>
                <h2>R$65,00</h2>
            </div>
        </Products>
    )
}