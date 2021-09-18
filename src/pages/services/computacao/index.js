import React from "react";

import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappButton from "../../../components/whatsappButton";


import './style.scss'

const computacao = () => {

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
                <section id="computacaoPage">

                    <div className="computacaoTitle">
                        <h1>Desenvolvimento e tecnologia</h1>
                        <p>Desenvolvendo seus sonhos</p>
                    </div>

                    <div className="computacaoServices">
                        <div className="service1">
                            <h1>WebSites</h1>
                            <p>Hoje em dia todo mundo pesquisa online antes de contratar alguém, não é? Justamente por isso, ter um website moderno e que mostre a personalidade da sua empresa pode ser o que faltava para fechar aquele contrato. Deixe que cuidamos disso!</p>
                        </div>
                        <div className="service1">
                            <h1>Aplicativo móvel</h1>
                            <p>Já parou para pensar na quantidade de coisas que fazemos por meio de aplicativos móveis? Transporte, compras, redes sociais, assistir vídeos e ouvir músicas. Agora só falta a sua empresa!
                            Temos exatamente o que você precisa para deixar a sua marca a um toque dos seus clientes!</p>
                        </div>
                        <div className="service1">
                            <h1>E-commerce</h1>
                            <p>Pesquisas apontam que o e-commerce cresceu 75% em meio a pandemia, pois com mais pessoas em casa, as demandas para o comércio virtual cresceram exponencialmente. O momento para a sua marca se expor ao mundo é agora, e nós temos a solução para a sua empresa!
                            Sua loja virtual ficará disponível 24/7, com design inovador e fluidez, para maximizar suas vendas. 
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Consultoria/outros serviços</h1>
                            <p>Gostaria de saber o que poderia melhorar no seu negócio na área tecnológica? Possui um website, e-commerce ou aplicativo móvel que precisa de uma repaginada? Ou ainda, gostaria de saber se realizamos outro tipo de serviço? Nós podemos te ajudar, entre em contato conosco!
                            </p>
                        </div>
                    </div>

                    <div className="computacaoPortf">
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
                        <a href="http:/Servicos-Eletrica"> Soluções Elétricas </a>
                        <a href="http:/Servicos-Negocios"> Gestão de Negócios </a>
                    </div>

                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default computacao