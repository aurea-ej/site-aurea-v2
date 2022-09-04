import { div } from 'prelude-ls';
import React from 'react';

import whatsapp from '../../imgs/whatsapp-48.png'

import './style.scss';

function WhatsappButton() {
    return (
        <div className="teste">
            <a href="https://api.whatsapp.com/send?phone=5522998157124&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Aurea!%20" target="_blank" rel="noreferrer"> <img src={whatsapp} alt="" /> </a>
        </div>
    )
}

export default WhatsappButton;