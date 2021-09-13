import React, { useState, useEffect } from 'react';
import './style.scss'
import MailchimpReact from 'mailchimp-react';

function NewsletterPopup() {
    
    return (
        <div id="container"> 
        
            <div classname="newsletterPopup"> 

                <h2>Ei, volta aqui!</h2>
                <h3>Ao se inscrever na nossa newsletter você ganha 15% DE DESCONTO</h3>
                <h2>Vai mesmo perder essa oportunidade?</h2>
        
                <div className="formPopup"> 
                    {/* <input type="email" placeholder="Seu e-mail"/> */}
                    <MailchimpReact action="https://<YOUR-USER>.usX.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX" />
                </div>
            </div>
        
        </div>
    )
}