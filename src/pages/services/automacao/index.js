import React from "react";

import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappButton from "../../../components/whatsappButton";


import './style.scss'

const automacao = () => {

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
                <section id="automacaoPage">

                    <div className="automacaoTitle">
                        <h1>Máquinas e Equipamentos</h1>
                        <p>Automatizando seus sonhos</p>
                    </div>

                    <div className="automacaoServices">
                        <div className="service1">
                            <h1>Montagem de PCs e Estruturas de Redes</h1>
                            <p>Um dos maiores causadores de baixa eficiência no cotidiano pessoal e empresarial são máquinas pouco poderosas e estruturas de redes frágeis. Isso não precisa mais ser um problema para você, deixe isso com a gente!
                            Fazemos cotações de peças e montagem completa de computadores, assim como planejamos estruturas de redes robustas para que a sua única preocupação seja com a sua rotina.</p>
                        </div>
                        <div className="service1">
                            <h1>Automação de Ambientes</h1>
                            <p>Ao acordar pela manhã, precisamos preparar um copo de café quente, abrir as cortinas, ligar o computador ou a televisão e desligar o ar-condicionado. Mas e se tudo isso estivesse pronto antes mesmo de você acordar? Ou ainda, feito com apenas um toque?
                            Estas e outras comodidades tornam-se realidade com a automação de ambientes!</p>
                        </div>
                        <div className="service1">
                            <h1>Automação Empresarial</h1>
                            <p>Eficiência é o que toda grande empresa busca para se manter no topo. Que tal automatizar mais processos no seu negócio? Temos soluções personalizadas que podem minimizar os erros humanos e maximizar  a velocidade de produção, sem abrir mão da qualidade! 
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Controle de Acesso</h1>
                            <p>Se unir praticidade à segurança em seu negócio ou residência parecia uma realidade distante, nós provamos o contrário!
                            Nossas soluções garantem acesso apenas à equipe autorizada aos setores de sua empresa e são capazes de reduzir riscos de invasões à sua propriedade de forma inovadora.
                            Jogue fora as suas chaves, seu espaço está ao alcance dos seus dedos!
                            </p>
                        </div>
                    </div>

                    <div className="automacaoPortf">
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
                        <a href="http:/Servicos-Computacao"> Desenvolvimento e Tecnologia </a>
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

export default automacao