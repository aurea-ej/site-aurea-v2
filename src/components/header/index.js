import React, {useState, createRef} from 'react'
import './style.scss'
import { Link } from "react-router-dom";
import logoAurea from '../../imgs/logoHeader1.png'

export default function Header (props) {

    const [isChecked,setIsChecked] = useState(false)

    const menuMobile = createRef()

    function showMenuMobile() {

        if (isChecked)
            menuMobile.current.style.display = 'none'
        else
            menuMobile.current.style.display = 'flex'
        
    }

    const [header, setHeader] = useState(false);

    
    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    
    window.addEventListener('scroll', changeBackground);

    return (

        <div>

        <div className='merdaDeHeaderDoCacete'>
            <header className={header ? 'header active' : 'header'}>

                <div className='logo' >

                    <a href='/#mainHome'> <img src={logoAurea} alt="LogoAurea" /> </a>

                </div>

                <div className='menu' >

                    <ul>

                        <li> <Link to='/' > Início </Link> </li>
                        <li> <Link to='/Quem-somos-nos'> Quem Somos </Link> </li>
                        <li> <a href='/Servicos'> Serviços </a> </li>
                        <li> <Link to='/Contato'> Contato </Link> </li>
                        <li> <Link to='/Blog'> Blog </Link> </li>

                    </ul>
                    
                </div>

                <div className="sandwich" >

                    <input type="checkbox" id="checkbox" onClick={ () => {

                        setIsChecked(!isChecked);
                        showMenuMobile()

                    }} />

                    <label htmlFor="checkbox" >

                        <span></span>
                        <span></span>
                        <span></span>

                    </label>

                </div>

            </header>

            <div className='menu-mobile' ref = {menuMobile} >

                <ul>

                    <li> <Link to='/' > Início </Link> </li>
                    <li> <Link to='/Quem-somos-nos'> Quem Somos </Link> </li>
                    <li> <Link to='/#services'> Serviços </Link> </li>
                    <li> <Link to='/Contato'> Contato </Link> </li>
                    <li> <Link to='/Blog'> Blog </Link> </li>

                </ul>

            </div>

            </div>
        </div>

    )
}