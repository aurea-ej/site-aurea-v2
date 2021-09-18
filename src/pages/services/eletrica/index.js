import React from "react";

import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappButton from "../../../components/whatsappButton";


import './style.scss'

const eletrica = () => {

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
                <section id="eletricaPage">

                    <div className="eletricaTitle">
                        <h1>Soluções Elétricas</h1>
                        <p>Soluções para você e para o planeta</p>
                    </div>

                    <div className="eletricaServices">
                        <div className="service1">
                            <h1>Análise Tarifária</h1>
                            <p>Sabia que o valor da sua conta de energia pode ser drasticamente reduzido? Isso pois, muitas vezes a sua tarifa não é a adequada para o seu estabelecimento, de maneira que se paga por uma demanda energética que não é aproveitada!
                            O processo para mudar de tarifa pode ser simples, mas analisar qual é a mais apropriada para a sua situação é um estudo bem trabalhoso. Por isso, deixe com a gente!</p>
                        </div>
                        <div className="service1">
                            <h1>Eficiência Energética</h1>
                            <p>A otimização de processos é um fator importantíssimo para a redução da conta de energia no final do mês sem afetar a produção de um estabelecimento. 
                            Estudamos os dispositivos elétricos e eletrônicos da sua empresa, avaliamos todo o consumo e retornamos para você uma solução para o uso mais econômico, eficiente, responsável e sustentável de sua energia. Chega de desperdícios!</p>
                        </div>
                        <div className="service1">
                            <h1>Projeto Elétrico</h1>
                            <p>Quem nunca usou um chuveiro que dava choque? Ou que o disjuntor desligava de repente durante o banho quente? A falta de um projeto elétrico  ideal ocasiona este e mais problemas. Nada a ver ter dor de cabeça com esses problemas em pleno 2021, né? Deixa que a Aurea te salvar dessa!
                            Nossos projetos terão a representação correta dos circuitos do seu espaço e garantirão a segurança e a alimentação correta dos seus equipamentos eletroeletrônicos.
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Consultoria / Outros Serviços</h1>
                            <p>Tem dúvidas quanto ao que pode melhorar no seu negócio na parte de energia? Gostaria que avaliássemos outro tipo de serviço? Nós podemos lhe ajudar, entre em contato conosco!
                            </p>
                        </div>
                    </div>

                    <div className="eletricaPortf">
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

                    <div className="otherProjects">
                        <h1> Veja nossos outros serviços! </h1>
                        <a href="http:/Servicos-Automacao"> Máquinas e Equipamentos </a>
                        <a href="http:/Servicos-Arquitetura"> Arquitetura e Urbanismo </a>
                        <a href="http:/Servicos-Computacao"> Desenvolvimento e Tecnologia </a>
                        <a href="http:/Servicos-Negocios"> Gestão de Negócios </a>
                    </div>

                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default eletrica