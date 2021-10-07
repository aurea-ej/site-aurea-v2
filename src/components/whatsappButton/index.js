import { div } from 'prelude-ls';
import React from 'react';
import { Link } from "react-router-dom";

import whatsapp from '../../imgs/whatsapp-48.png'

import './style.scss';

function WhatsappButton() {
    return (
        <div className="teste">
            <a href="https://api.whatsapp.com/send?phone=+5521990157124&text=Olá!%20Como%20podemos%20te%20ajudar?" target="_blank"> <img src={whatsapp} alt="" /> </a>
        </div>
    )
}

export default WhatsappButton;