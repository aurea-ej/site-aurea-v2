import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'
import WhatsappButton from "../../components/whatsappButton"

import Show from '../../imgs/show.jpg'
import RockInAurea from '../../imgs/rockInAurea.png'
import ArrowDown from '../../imgs/arrow.svg'
import Guitarrista from '../../imgs/guitarist.jpg'
import Mão from '../../imgs/hand.png'
import videoAstronauta from '../../imgs/videoAstronauta.mp4'

import './style.scss'

function PS() {

    return (

        <main id="mainPS">

            <section id="heroSectionPS">

                <div className="heroWrapperPS">

                    <div className="logoPSWrapper">

                        <img className="rockInAurea" draggable="false" src={RockInAurea} />
                        <h1>Agora o palco é seu!</h1>
                        <h4>Processo seletivo 2021.2</h4>

                        <a href="#PSInfosSection"><img src={ArrowDown} alt="Ver informações" /></a>

                    </div>

                    <img className="backgroundPS" src={Show} />

                </div>

            </section>

            <section id="PSInfosSection">

                <div className="introPSInfos">

                    <h1>Sua hora de brilhar chegou!</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vel iure odio modi, cum animi perspiciatis sapiente repellat quis a numquam, molestiae libero voluptas. Praesentium repellat odio illo provident? Numquam nisi eveniet distinctio dignissimos, libero dolores aperiam dolorem at, corrupti nobis reprehenderit autem commodi vel consequatur! Ducimus veritatis porro recusandae animi corporis impedit quam quo voluptatem in beatae! Ullam dignissimos vel eum non magni quas dolore, animi ab dolor perferendis id. Saepe velit omnis consectetur doloribus, asperiores quaerat magni corporis nostrum quis rerum quibusdam voluptate eaque dolores! Magnam ullam doloribus accusantium iste. Consectetur at velit suscipit optio atque tempora, porro omnis itaque amet odio quam numquam autem tenetur asperiores animi quibusdam et nesciunt distinctio ullam. Quasi asperiores mollitia ex dolorem nobis voluptatum fuga rerum, voluptatem quia excepturi recusandae odio est distinctio illo officia perspiciatis vero expedita! Vitae autem error perferendis eius, libero dolor itaque nam sed totam officiis rem, nisi neque, ratione quisquam? Earum asperiores doloremque neque debitis harum laboriosam architecto assumenda reprehenderit ipsum aliquid laudantium alias iste odit, quis quisquam, a ad. Molestiae necessitatibus, explicabo ducimus pariatur deserunt expedita.</p>

                </div>

                <section id="PSPhases">

                    <h2>Etapas</h2>

                    <div className="PSStoryline">

                        <div className="storyline" />

                        <div id="A" className="storylineText">

                            <h3>Lançamento do edital e inscrições</h3>

                            <h4>14/10 a 01/11</h4>

                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis numquam illum cum iure accusamus beatae?</span>

                        </div>

                        <div id="B" className="boxStoryline">

                            <h1>1</h1>

                        </div>

                        <div id="C" className="boxStoryline">

                            <h1>2</h1>

                        </div>

                        <div id="D" className="storylineText">

                            <h3>Início da marcação de entrevistas</h3>

                            <h4>04/11</h4>

                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis numquam illum cum iure accusamus beatae?</span>

                        </div>

                        <div id="E" className="storylineText">

                            <h3>Entrevistas e dinâmica de grupo</h3>

                            <h4>18/11</h4>

                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis numquam illum cum iure accusamus beatae?</span>

                        </div>

                        <div id="F" className="boxStoryline">

                            <h1>3</h1>

                        </div>

                        <div id="G" className="boxStoryline">

                            <h1>4</h1>

                        </div>

                        <div id="H" className="storylineText">

                            <h3>Divulgação dos trainees selecionados</h3>

                            <h4>13/12</h4>

                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis numquam illum cum iure accusamus beatae?</span>

                        </div>

                        <div id="I" className="storylineText">

                            <h3>Início do processo trainee</h3>

                            <h4>15/12</h4>

                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis numquam illum cum iure accusamus beatae?</span>

                        </div>

                        <div id="J" className="boxStoryline">

                            <h1>5</h1>

                        </div>

                    </div>

                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScURCaHvOUlMdNrKEaik_tBvOwph2uwhu1EqKLyes3zd4FWng/viewform">Inscrever-se</a>

                </section>

                <section id="OurDifferential">

                    <div className="imgRegister">

                        <img src={Guitarrista} alt="" />

                        <span>Mais que uma empresa</span>

                    </div>

                    <div className="textDifferential">

                        <h1>Somos uma <br />FAMÍLIA!</h1>

                        <p>Nossa história vai muito além da Arquitetura e Urbanismo, Engenharia de Computação, Engenharia de Controle e Automação e Engenharia elétrica. Nós construímos laços, desenvolvemos sonhos, automatizamos ideias e energizamos o mundo!</p>

                        <p>A Aurea foi criada com um único objetivo: <strong>impactar!</strong> Aqui prezamos pela satisfação de nossos membros. Não formamos apenas membros preparados para o mercado de trabalho. Formamos lideranças. Formamos pessoas capazes de superar qualquer desafio independente do grau de dificuldade. E acima de tudo: <strong>formamos laços!</strong> Se engana quem pensa que a Aurea é apenas uma empresa júnior. Somos muito mais do que isso! <strong>SOMOS UMA FAMÍLIA! E chegou sua hora de fazer parte dela.</strong></p>

                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScURCaHvOUlMdNrKEaik_tBvOwph2uwhu1EqKLyes3zd4FWng/viewform">Quero fazer parte!</a>

                    </div>

                </section>

                <section id="PSInfos">

                    <div className="infosContent">

                        <h1>Requisitos</h1>

                        <ul>

                            <li><span>• Estar regularmente matriculado nos seguintes cursos do Instituto Federal Fluminense - Campus Campos Centro: Arquitetura e Urbanismo, Engenharia de Computação,
                                Engenharia de Controle e Automação e Engenharia Elétrica;</span></li>

                            <li><span>• Ter disponibilidade de (no mínimo) 8 horas semanais para dedicar à Aurea (sendo estas distribuídas na execução de projetos, treinamentos, reuniões, atividades da empresa, entre outros);</span></li>

                            <li><span>• Ter disponibilidade para reuniões semanais e extraordinárias a serem combinadas, tanto presenciais quanto online;</span></li>

                            <li>
                                <span>
                                    • Estar em plena concordância com os termos do <a
                                        target="_blank"
                                        href="https://www.google.com/url?q=http://bit.ly/RockInAurea20212&sa=D&source=editors&ust=1634351367079000&usg=AOvVaw09UH5vlIEaUM_BfXd62uMP">Edital
                                    </a>.
                                </span>
                            </li>

                        </ul>

                        <div className="aboutUsPS">

                            <h1>O que é uma empresa júnior?</h1>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis esse tenetur consequuntur quo voluptate delectus maxime amet! Dolor, perspiciatis. Nemo quaerat aperiam eius perferendis, ut ex, laborum incidunt sunt numquam minus nulla quo debitis. Cupiditate autem dolor eos. At numquam eos consequuntur minima dolorum, nobis laborum consequatur natus rerum obcaecati.</p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis esse tenetur consequuntur quo voluptate delectus maxime amet! Dolor, perspiciatis. Nemo quaerat aperiam eius perferendis, ut ex, laborum incidunt sunt numquam minus nulla quo debitis. Cupiditate autem dolor eos. At numquam eos consequuntur minima dolorum, nobis laborum consequatur natus rerum obcaecati.</p>

                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScURCaHvOUlMdNrKEaik_tBvOwph2uwhu1EqKLyes3zd4FWng/viewform">Quero me inscrever</a>

                            <div className="imgPSWrapper">

                                <img src={Mão} alt="" />

                            </div>

                        </div>

                    </div>

                    <section id="videoPSSection">

                        <h1>Chegou sua hora!</h1>

                        <video autoplay="true" loop muted src={videoAstronauta} />

                    </section>

                </section>

            </section>

        </main>

    )


}

export default PS