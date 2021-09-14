import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'

import mascote1 from '../../imgs/Mascote1.png'
import Joelma from '../../imgs/Joelma.jpg'

import Linkedin from "../../imgs/linkedinLogo2.svg"

import './style.scss'

function AboutUs() {

    return (

        <div id='mainAboutUs'>

            <Header />

            <section id='heroSectionAbout'>

                <div className='rowObjects'>
                    <div className='collumnObjects'>
                        <h1>Prazer, Aurea!</h1>
                        <p>Fundada no dia 9 de Agosto de 2016, a Aurea Soluções e Projetos deu os seus primeiros passos como uma Empresa Júnior no Instituto Federal Fluminense como uma empresa multidiciplinar que presta serviços nas áreas de
                            <a href="/Servicos">Engenharia de Computação, </a>
                            <a href="/Servicos">Engenharia Elétrica, </a>
                            <a href="/Servicos">Engenharia de Controle e Automação, </a>
                            <a href="/Servicos">e Arquitetura e Urbanismo.</a>
                        </p>
                        <p>No ano de 2018 a Aurea passou pelo processo de federação, que de fato a introduziu ao MEJ (Movimento Empresa Júnior) como uma Empresa Júnior. E com muito esforço e trabalho duro recebemos nos anos de 2019 e 2020 diversas premiações de visibilidade estadual, fazendo com que a Aurea fosse reconhecida como uma empresa "Bi Impacto", ou seja, uma Empresa Júnior capaz de bater todas as suas metas anuais em dois anos consecutivos. Dessa forma, em um cenário de maturidade ainda mais expressivo, atualmente, em 2021, a Aurea está atrás de sua próxima conquista em rede: Alcançar o "Tri Impacto", batendo todas as metas anuais por três anos consecutivos.</p>

                        <div className="callToActionMembers">

                            <a href="/Membros">Conheça nossas lideranças</a>

                        </div>

                    </div>
                    <div className="heroImgWrapper">
                        <img draggable="false" src={mascote1} alt="" />
                    </div>
                </div>

            </section>

            <section id='sectionWhoWeAre'>

                <div className="MVV">

                    <h1>Nosso MVV</h1>

                    <p>O tripé Missão, Visão e Valores, carinhosamente apelidado como MVV, é uma
                        estratégia interna imprescindível para a empresa ter entendimento de si mesma.</p>

                </div>

                <div className="missionValuesEyesight" >

                    <div className="cardM">

                        <h3>Missão</h3>

                        <div className="textBox"  >
                            <p>A missão da Aurea é <b>formar empreendedores de impacto</b> através do jeito Aureano de ser.</p>
                        </div>

                    </div>

                    <div className="cardV1">
                        <h3>Visão</h3>

                        <div className="textBox"  >
                            <p>A visão da Aurea até 2023 é <b>ser referência</b> em projetos de excelência que contribuam para <b>formação de líderes atuantes e conectados</b> no MEJ Fluminense.</p>
                        </div>
                    </div>

                    <div className="cardV2">
                        <h3>Valores</h3>

                        <div className="textBox"  >

                            <div className="tableAurea" >

                                <tr><td><b>A</b>paixonado</td></tr>
                                <tr><td><b>U</b>nido</td></tr>
                                <tr><td><b>R</b>esponsável</td></tr>
                                <tr><td><b>E</b>mpático</td></tr>
                                <tr><td><b>A</b>udacioso</td></tr>
                                <tr><td><b>N</b>otável</td></tr>
                                <tr><td><b>O</b>bstinado</td></tr>

                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section id="membersTestimonial">

                <h1 id="textIntroTestimonial">Relatos dos nossos pós-juniores</h1>

                <div className="membersCardTestimonialWrapper">

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src={Joelma} alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Fulano de tal</h1>
                                    <h4>Ex-Coordenador de Arquitetura</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/higor-brandao" className="testimonialImageWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Antes e depois. Pré e pós. Separado por um marco, assim é minha trajetória devido a Aurea. As vezes me pego olhando para novembro de 2018 quando entrei na empresa e o quanto aprendi de lá para cá é imensurável. O Heitor que entra no MEJ acreditava que sabia o que era liderança, problemas, responsabilidade, aprendizado... Todas essas palavras foram ressignificadas durante esse pouco mais de 1 ano e meio. A alegria do primeiro projeto da área de engenharia elétrica, os desafios a cada nova negociação, cada meta batida, cada recorde que em sequência, quase como um furacão, íamos rompendo um por um para escrever conquistas ainda maiores na história da Aurea. Existem diversos pontos de inflexão na minha jornada, desde momento em família como o EFEJ 19, até momentos em que errei enquanto liderança e aprendi que grande parte de ser líder é servir... Olhar para todas as experiências no MEJ é olhar para aprendizados em boas conversas, algo que aprendi a amar tanto quanto o futebol do final de semana. Tenho o que acredito ser mais quase 6 meses de trajetória por aqui e espero que cada momento seja como essa foto, com responsabilidade e leveza, o sorriso que tanto aprendi a manter durante o percurso para que sempre traga alegria na chegada e deixe saudade na partida."</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src={Joelma} alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Fulano de tal</h1>
                                    <h4>Ex-Coordenador de Arquitetura</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/higor-brandao" className="testimonialImageWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Quando encontrei a Aurea no início da faculdade ela ainda passava por seu processo de configuração e federação, enquanto eu estava buscando por experiências além das salas de aula. Hoje, 2 anos depois, afirmo que é nítido o crescimento que a empresa vem tendo, e o quanto acrescenta aos voluntários que passam por ali. Na Aurea desenvolvi habilidades que dificilmente conseguiria em outro lugar, e o que mais me encantou foi enxergar a empresa como um espaço multidisciplinar de trocas potentes, onde estudantes de diferentes cursos e perfis se juntam por um propósito, buscando aprimoramento de processos, soluções de desafios na prática e aprendizagem conjunta. Nas experiências de liderança e gerenciamento, pude reconhecer meus pontos fortes a serem valorizados e os fracos que merecem maior cuidado, o que direciona meu desenvolvimento em prol de ser uma melhor profissional ao oferecer soluções mais completas. Conheci metodologias ágeis que aprimoram processos, profissionais referência, e vivi de perto o gerenciamento de uma empresa antes mesmo de abrir um escritório. Toda minha gratidão aos amigos que fiz nesse caminho, que tanto me ensinaram e provaram o quanto podemos ir longe quando se tem uma equipe alinhada, que escuta, sonha e acredita junto."</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src={Joelma} alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Fulano de tal</h1>
                                    <h4>Ex-Coordenador de Arquitetura</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/higor-brandao" className="testimonialImageWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"É bem claro conseguir diferenciar o Victor antes e depois do MEJ/Aurea. O Victor de antes, era tão focado na parte técnica que acaba esquecendo algumas habilidades requisitadas no mercado. O MEJ me ajudou muito nesse quesito! Aprendi muito sobre soft skill's, essas "habilidades extras" que não aprendemos durante a faculdade, mas que fazem uma diferença absurda para o mercado. Em apenas 6 meses de MEJ consigo ver claramente minha evolução. Logo que entrei escolhi, na Aurea, a Diretoria de Projetos como primeira opção e, para minha surpresa, me tornei Gerente de Projetos de computação. A experiência foi (e é) incrível! Lidar com clientes de outras empresas/serviços/negócios é algo espetacular! Tirei de lição um pouquinho do que aprendi com cada um deles! Aprendi a realizar o contado da melhor forma, saber conversar bem sobre projetos, liderar equipes, cobrar e também ser cobrado, da maneira correta! Usei tudo isso de motivação para promover um projeto maior pessoal, a EYER TECH. Todo o aprendizado que consegui no MEJ está sendo muito bem utilizado nessa nova trajetória da minha vida. Aprendi com a Aurea como é bom realizar um sonho de um cliente e, mais que isso, que o sonho de um cliente também se torna o meu sonho!"</p>

                        </div>

                    </div>
                    

                </div>

            </section>

            <Footer />

        </div>

    )

}

export default AboutUs