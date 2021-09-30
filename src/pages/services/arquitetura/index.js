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
        centerPadding: "0px",
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
                            <img src="https://i.ibb.co/K7f3MkR/clinica3.jpg" alt=""/>
                            <p>Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo. No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.
                            Este foi um serviço de: projeto de reforma de interiores e teve duração de: 27/05/2019 - 29/07/2019.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/FD6JCbF/cli-nica.jpg" alt=""/>
                            <p>Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo. No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.
                            Este foi um serviço de: projeto de reforma de interiores e teve duração de: 27/05/2019 - 29/07/2019.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/KW3t0XJ/clinica2.jpg" alt=""/>
                            <p>Tendo em vista a necessidade de um espaço mais confortável, atrativo e funcional, o projeto de reforma da clínica de estética belo corpo foi todo pensado em prol disso. Gerar um ambiente renovado sem a necessidade de se desfazer totalmente do antigo. No projeto temos uma clínica com tons neutros e espaços otimizados. Além disso, priorizamos a ideia de soluções rápidas e eficientes que não gerassem tanta mão de obra.
                            Este foi um serviço de: projeto de reforma de interiores e teve duração de: 27/05/2019 - 29/07/2019.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/vxtW2sK/Co-pia-de-03.png" alt=""/>
                            <p>O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado. Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.
                            Este foi um serviço de: projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento e teve duração de: 11/05/2020 - 18/12/2020.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/TwfQ8wh/Co-pia-de-vista-lateral-direita.png" alt=""/>
                            <p>O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado. Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.
                            Este foi um serviço de: projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento e teve duração de: 11/05/2020 - 18/12/2020.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/ry7cn1g/Co-pia-de-vista-frontal.png" alt=""/>
                            <p>O Driver Club foi desenvolvido a partir da ideia de estabelecer uma empresa de tecnologia, com um serviço de alto padrão, rápido e custo acessível. O proprietário tinha o sonho de empreender e causar impacto em um mercado inexplorado. Para materializarmos tudo isso foi executado um projeto com estrutura metálica e concreto polido. No interior da franquia temos materiais que se comunicam com o externo, causando assim uma harmonia.
                            Este foi um serviço de: projeto arquitetônico, projeto de interiores e memorial ilustrativo de acabamento e teve duração de: 11/05/2020 - 18/12/2020.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/sKfjCRP/Co-pia-de-2020-10-ARQ-RE-DANIEL-EP-V01-OP01.jpg" alt=""/>
                            <p>Daniel e Bárbara chegaram com o desejo de ter uma residência que transmitisse a identidade deles, um casal apaixonado pelo simples, que valoriza a vegetação e fissurado por café. No projeto tentamos traduzir tudo isso através de um estilo arquitetônico mais rústico, rodeado de vegetação. O Daniel é um cliente fidelizado da Aurea, ele fez conosco também o projeto do laboratório de engenharia pedagógica.
                            Este foi um serviço de: projeto de reforma de arquitetura residencial e teve duração de: 18/08/2020 - 29/11/2020.</p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/F4jzB3V/Co-pia-de-2-RENDER-FINAL-PO-S-PRODUC-A-O.png" alt=""/>
                            <p>O âmbito conceitual do projeto foi pautado na própria cultura organizacional da Aurea, algo feito propositalmente em prol de atingir um nível satisfatório de pertencimento, algo que além de criar um ambiente que condiz com os princípios da empresa, a fortalece. A fim de viabilizar os conceitos propostos, as soluções práticas basearam-se em construir um layout móvel e híbrido a fim de criar infinitas possibilidades que serão descobertas de acordo com as demandas. Além de expor a história da empresa nas paredes, tal como criar espaço para os prêmios. Tudo isso com o objetivo de criar um ambiente despojado e acolhedor ao proporcionar a infraestrutura necessária para o bem estar do membro
                            </p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/419T57R/6-effects-Result.png" alt=""/>
                            <p>Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente. Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição! O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros. Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.
                            Este foi um serviço de: projeto de Reforma Residencial e teve duração de: 03/07/2020 - 25/09/2020.
                            </p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/rGPN6qY/2-effects-Result.png" alt=""/>
                            <p>Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente. Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição! O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros. Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.
                            Este foi um serviço de: projeto de Reforma Residencial e teve duração de: 03/07/2020 - 25/09/2020.
                            </p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/k2Vc3sv/1-effects-Result.png" alt=""/>
                            <p>Localizada em Campos dos Goytacazes, a Casa J constitui um projeto com área equivalente a 286,79 m². A residência foi projetada com base nos conceitos de funcionalidade e modernidade para atender aos desejos da família composta por quatro membros. O grande desafio foi adaptar o programa de necessidades à estrutura existente. Na fachada principal, foram usados tons neutros, como o cinza e o branco, trazendo um ar de contemporaneidade e sofisticação, e o revestimento amadeirado, garantindo elegância na medida certa. A jardineira na varanda trouxe um charme a mais na composição! O projeto de Arquitetura também contempla a reforma da área de lazer da residência. Trabalhando o conceito de integração, é possível notar que o espaço foi projetado para atender as necessidades da família por um ambiente aconchegante e amplo de socialização. O objetivo foi criar uma atmosfera atraente e relaxante para descanso e também para festas e encontros. Foi projetada uma varanda Gourmet com uma área para churrasqueira, que recebe o apoio de uma cozinha instalada ao lado de fora da casa, ela pode servir como auxílio para a cozinha interna e também cria uma versatilidade de usos.Para compor o ambiente e torná-lo cada vez mais agradável, foi instalado um pergolado com trepadeiras. Ele funciona como um quebra sol, a combinação dos elementos ajuda a reduzir a temperatura do interior do ambiente, deixando o clima mais aconchegante.
                            Este foi um serviço de: projeto de Reforma Residencial e teve duração de: 03/07/2020 - 25/09/2020.
                            </p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/PrYp3Ty/imagem-renderizada-1.png" alt=""/>
                            <p>O projeto de interiores em questão foi realizado para uma cozinha. Esse ambiente não apresentava uma funcionalidade adequada e um modelo precário, no qual o cliente não se identificava no espaço, além do layout ser pequeno. Para solucionar tal inadequação, foi pensado um mobiliário planejado, com armários suspensos e abaixo das bancadas, a substituição de alguns eletrodomésticos, como a mudança de um fogão por um cooktop - forma essa encontrada para desocupar o espaço inferior, que seria utilizado para os armários - e também houve a implementação de uma coifa na cozinha, com o intuito de minimizar os resíduos durante o preparo de alimentos, tais como fumaça e gordura, assim, oferecendo um conforto maior nesse ambiente.
                            Este foi um serviço de: projeto de Reforma residencial - cozinha e teve duração de: 22/06/2020 - 17/07/2020.
                            </p>
                        </div>
                        <div className="portfolio1">
                            <img src="https://i.ibb.co/FmHWR35/vista-02.jpg" alt=""/>
                            <p>O projeto de interiores em questão foi realizado para uma cozinha. Esse ambiente não apresentava uma funcionalidade adequada e um modelo precário, no qual o cliente não se identificava no espaço, além do layout ser pequeno. Para solucionar tal inadequação, foi pensado um mobiliário planejado, com armários suspensos e abaixo das bancadas, a substituição de alguns eletrodomésticos, como a mudança de um fogão por um cooktop - forma essa encontrada para desocupar o espaço inferior, que seria utilizado para os armários - e também houve a implementação de uma coifa na cozinha, com o intuito de minimizar os resíduos durante o preparo de alimentos, tais como fumaça e gordura, assim, oferecendo um conforto maior nesse ambiente.
                            Este foi um serviço de: projeto de Reforma residencial - cozinha e teve duração de: 22/06/2020 - 17/07/2020.
                            </p>
                        </div>
                        </Slider>
                    </div>

                    <div className="otherProjects">
                        <h1> Veja nossos outros serviços! </h1>
                        <a href="http:/Servicos-Computacao"> Desenvolvimento e Tecnologia </a>
                        <a href="http:/Servicos-Automacao"> Máquinas e Equipamentos </a>
                        <a href="http:/Servicos-Eletrica"> Soluções Elétricas </a>
                        <a href="http:/Servicos-Negocios"> Gestão de Negócios </a>
                    </div>

                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default arquitetura