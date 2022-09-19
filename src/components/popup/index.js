import { React, useState } from 'react';
import { Link } from "react-router-dom";

import Ball from '../../imgs/Bola.png'
import CupAlbum from '../../imgs/albumAureaWorldCup.png'
import AureaWorldCup from '../../imgs/AureaWorldCup.png'
import Pattern from '../../imgs/popupWorldCup.png'

import './style.scss';

function Popup() {

    const [displayPopup, setDisplayPopup] = useState('flex');

    function closePopup() {

        setDisplayPopup('none');

    }

    return (

        <div style={{ display: displayPopup }} className="screenWrapper">

            <div className="popup">

                <img draggable="false" id="ball" src={Ball} alt="" />
                <img draggable="false" id="album" src={CupAlbum} alt="" />
                <img id="abstract" src={Pattern} alt="" />

                <div className="gradient" />

                <div className="infoPopup">

                    <div className="imgPSWrapper">

                        <img draggable="false" id="rockInAurea" src={AureaWorldCup} alt="" />
                        <h1>Processo <br/>Seletivo <br/>2022.2</h1>
                    </div>
                    
                    <Link className="buttonInfo" to="/processo-seletivo">Saiba mais</Link>

                </div>

                <div onClick={closePopup} className="closeButton">X</div>

            </div>

        </div>

    )
}

export default Popup;