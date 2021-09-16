import React from "react";

import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappButton from "../../../components/whatsappButton";


import './style.scss'

const negocios = () => {

    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        adaptiveHeight: true
    };

    return (

        <div id="body">
            <Header />
                <section id="negociosPage">

                    <div className="negociosTitle">
                        <h1>Gestão de negócios</h1>
                        <p>As melhores soluções para o seu negócio</p>
                    </div>

                    <div className="negociosServices">
                        <div className="service1">
                            <h1>Fluxo de Caixa</h1>
                            <p>Sabia que a Aurea também oferece soluções para a administração do seu negócio? Tenha controle do fluxo de montantes da sua empresa em uma só base de dados, automatizada, organizada e acessível enquanto dá adeus à desorganização dos papéis!</p>
                        </div>
                        <div className="service1">
                            <h1>Dashboard de Vendas</h1>
                            <p>E se, você pudesse ter uma visão geral, em tempo real, das vendas da sua empresa? Temos exatamente o que precisa!
                            Nossos dashboards são desenvolvidos em Power BI e oferecem dados de forma intuitiva e simples, para que a sua tomada de decisões seja rápida e cirúrgica.</p>
                        </div>
                        <div className="service1">
                            <h1>Planejamento Financeiro</h1>
                            <p>Quer expandir seus negócios no futuro? Acha que precisa realocar recursos, mas não imagina onde ou como fazer? Nós te ajudamos com isso!
                            </p>
                        </div>
                    </div>

                    <div className="negociosPortf">
                        <h1>Veja alguns de nossos projetos!</h1>
                        <Slider {...settings}>
                        <div className="portfolio1">
                            <img src="http://placekitten.com/g/400/200" alt=""/>
                            <p>Exemplo de texto de projeto</p>
                        </div>
                        <div className="portfolio1">
                            <img src="http://placekitten.com/g/400/200" alt=""/>
                        </div>
                        <div className="portfolio1">
                            <img src="http://placekitten.com/g/400/200" alt=""/>
                        </div>
                        <div className="portfolio1">
                            <img src="http://placekitten.com/g/400/200" alt=""/>
                        </div>
                        </Slider>
                    </div>

                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default negocios