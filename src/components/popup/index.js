import { React, useState } from 'react';
import { Link } from "react-router-dom";

import Guitarist from '../../imgs/violão.png'
import RockInAurea3 from '../../imgs/rockinaurea4.png'
import Pattern from '../../imgs/abstract2.jpeg'

import './style.scss';

function Popup() {

    const [displayPopup, setDisplayPopup] = useState('none');

    function closePopup() {

        setDisplayPopup('none');

    }

    return (

        <div style={{ display: displayPopup }} className="screenWrapper">

            <div className="popup">

                <img draggable="false" id="guitarist" src={Guitarist} alt="" />
                <img id="abstract" src={Pattern} alt="" />

                <div className="gradient" />

                <div className="infoPopup">

                    <div className="imgPSWrapper">

                        <img draggable="false" id="rockInAurea" src={RockInAurea3} alt="" />
                    
                    </div>
                    <h1>Processo Seletivo <br/>2021.2</h1>
                    <Link className="buttonInfo" to="/processo-seletivo">Saiba mais</Link>

                </div>

                <div onClick={closePopup} className="closeButton">X</div>

            </div>

        </div>

    )
}

export default Popup;