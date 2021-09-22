import React, { useState, createRef } from 'react'
import { Link } from "react-router-dom";

import './style.scss'

import logoAurea from '../../imgs/logoHeader1.png'

import 'firebase/compat/auth'

export default function Header(props) {

    const [isChecked, setIsChecked] = useState(false);

    const menuMobile = createRef()

    function showMenuMobile() {

        if (isChecked)
            menuMobile.current.style.display = 'none'
        else
            menuMobile.current.style.display = 'flex'

    }

    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    // function onAuthStateChanged(user) {

    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) 
    //           setUserIsLogged(true)
    //       });


    // }

    // useEffect(() => {

    //     if(!firebase.apps.length)
    //         firebase.initializeApp(firebaseConfig)
    //     onAuthStateChanged();

    // }, []);

    // useEffect(() => {

    //     const userEmail = localStorage.getItem('adminEmail')

    //     // firebase.database().ref('users/').get('/users')
    //     //     .then(function (snapshot) {

    //     //         if (snapshot.exists()) {

    //     //             var data = snapshot.val()
    //     //             var temp = Object.keys(data).map((key) => data[key])

    //     //             setDataUsers(temp)

    //     //             temp.map((item) => {

    //     //                 if (item.email === userEmail) {
    //     //                     setDataAccount(item)
    //     //                 }

    //     //             })

    //     //         } else

    //     //             console.log("No data available");

    //     //     })

    //     firebase.database().ref('admins/').get('/admins')
    //         .then(function (snapshot) {

    //             if (snapshot.exists()) {

    //                 var data = snapshot.val()
    //                 var temp = Object.keys(data).map((key) => data[key])

    //                 console.log('data', data)
    //                 console.log('temp', temp)
    //                 console.log('temp', temp.email)

    //                 temp.map((item) => {

    //                     if (item.email === userEmail) {

    //                         setIsAdmin(true)

    //                     }

    //                 })

    //             } else

    //                 console.log("No data available");

    //         })

    // }, []);

    return (

        <div>

            <div className='mainHeader'>
                <header className={header ? 'header active' : 'header'}>

                    <div className='logo' >

                        <a href='/#mainHome'> <img src={logoAurea} alt="LogoAurea" /> </a>

                    </div>

                    <div className='menu' >

                        <ul>

                            <li> <Link to='/' > Início </Link> </li>
                            <li> <Link to='/Quem-somos-nos'> Quem Somos </Link> </li>
                            <li> <Link to='/Servicos'> Serviços </Link> </li>
                            <li> <Link to='/Contato'> Contato </Link> </li>
                            <li> <Link to='/Blog'> Blog </Link> </li>

                        </ul>

                    </div>

                    <div className="sandwich" >

                        <input type="checkbox" id="checkbox" onClick={() => {

                            setIsChecked(!isChecked);
                            showMenuMobile()
                            window.scrollTo(0, 0)

                        }} />

                        <label htmlFor="checkbox" >

                            <span></span>
                            <span></span>
                            <span></span>

                        </label>

                    </div>

                </header>

                <div className='menu-mobile' ref={menuMobile} >

                    <ul>

                        <a href="/"> Início </a>
                        <a href="/Quem-somos-nos"> Quem Somos </a>
                        <a href="/Servicos"> Serviços </a>
                        <a href="/Contato"> Contato </a>
                        <a href="/Blog"> Blog </a>

                    </ul>

                </div>

            </div>

        </div>

    )
}