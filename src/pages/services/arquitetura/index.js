import React from "react";

import Header from '../../../components/header';
import Footer from '../../../components/footer';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappButton from "../../../components/whatsappButton";


import './style.scss'

const arquitetura = () => {

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
                <section id="arquiteturaPage">

                    <div className="arquiteturaTitle">
                        <h1>Arquitetura & Urbanismo</h1>
                        <p>Planejando os seus sonhos</p>
                    </div>

                    <div className="arquiteturaServices">
                        <div className="service1">
                            <h1>Projeto Arquitetônico</h1>
                            <p>Segurança: Garantia de uma construção tranquila com a responsabilidade de quem detém o conhecimento técnico necessário.  
                            Acessibilidade, Ergonomia e Funcionalidade. 
                            Beleza e estética: Importante tanto para clientes residenciais como também comerciais. Para os residenciais propicia satisfação, conforto e valorização da construção. E para os comerciais promove atratividade para o estabelecimento, aumentando a captação de clientes. 
                            Custo que não ultrapassa o orçamento: O encarregado pelo projeto fará o melhor uso possível dos materiais de construção e se valerá das estratégias mais eficientes com objetivo de reduzir os custos sem perder a qualidade.</p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Legalização</h1>
                            <p>Garante que o imóvel está de acordo com as garantias legais. 
                            Evita multas por irregularidades. 
                            Facilita a venda da construção, caso o cliente queira expandir seu negócio ou mudar de localidade. 
                            É necessária para a realização de reformas na edificação. 
                            Assegura o alvará de funcionamento: Licença obrigatória para todo o tipo de comércio e serviço.</p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Reforma</h1>
                            <p>Análise detalhadamente todos os desejos do cliente
                            Promove funcionalidade e conforto.
                            Agrega a estética dos seus sonhos.
                            Se adequa as normas da construção civil.
                            Propicia Soluções para reorganizar e transformar o seu espaço
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Interiores</h1>
                            <p>Garante que o projeto sairá dentro do esperado e sua casa/estabelecimento ficará do jeito que você sempre quis. 
                            Avaliação profissional com o conhecimento técnico apropriado. 
                            Possibilidade de criar um projeto de qualidade, pensando no seu orçamento. 
                            Adapta os seus gostos quanto a iluminação, estilo e cor durante o desenvolvimento do projeto através da comunicação frequente e direta entre o projetista e você.
                            Auxílio direto na escolha dos materiais.
                            Caso seja um estabelecimento comercial, proporcionar um projeto de interiores de modo a garantir o conforto dos clientes através da boa receptividade.
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Mobiliário</h1>
                            <p>Criam-se  móveis que combinem com a decoração existente e sejam funcionais.
                            Atenção as dimensões do ambiente e a harmonia do mesmo.
                            Composições que pensam na praticidade aliada a estética.</p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Fachada</h1>
                            <p>Proporciona  a estética  e estilo dos seus sonhos. 
                            Acarreta equilíbrio e harmonia. 
                            Fornece um projeto tecnicamente dentro das normas.
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Projeto de Cenografia</h1>
                            <p>Transforma um conceito, seus desejos, em realidade. 
                            A partir do conceito é desenvolvida toda a ambientação, que aplicada ao espaço criará um ambiente imersivo. 
                            Valoriza o seu evento, criando um espaço lúdico e criativo, além de solucionar os problemas que possam existir no espaço.
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Projeto Luminotécnico</h1>
                            <p>Cria-se áreas de destaque, trabalhando com diferentes temperaturas e ângulos, produzindo um ambiente especial e único para cada cliente.
                            Pode ser aplicado em fachadas, interiores e paisagismo.
                            Melhora-se o aproveitamento da luz no local utilizando soluções eficientes, econômicas e sustentáveis que o personalizam da forma que  preferir.</p>
                        </div>
                        <div className="service1">
                            <h1>Projeto Paisagístico</h1>
                            <p>Transforma e encanta qualquer espaço através da natureza.
                            Planeja e realiza a gestão e a preservação dos espaços, criando-os ou reformando-os.
                            Traz harmonia ao seu ambiente, utilizando técnicas de botânica e ecologia, abusando das formas e cores.
                            Leva em consideração as características da região, terreno, tipo de solo, estilo/designer do lugar, o gosto e a disponibilidade do dono da propriedade ou projeto.
                            Promove melhorias na estética, funcionalidade e conforto.
                            Realça as formas, disfarçando as imperfeições e rompe com a rigidez dos materiais. 
                            Agrega sustentabilidade e qualidade de vida.
                            </p>
                        </div>
                        <div className="service1">
                            <h1>Consultoria e Outros Serviços</h1>
                            <p>Realizamos também consultorias para avaliar as suas dores e oferecer soluções eficientes, práticas e que cabem no seu bolso!</p>
                        </div>
                    </div>

                    <div className="arquiteturaPortf">
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

export default arquitetura