import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'
import WhatsappButton from "../../components/whatsappButton"

import Astronauta1 from '../../imgs/Astronauta4.png'
import astronauta from '../../imgs/astronauta.png'
import LuaRoxo from '../../imgs/luaRoxa.png'
import BJ from '../../imgs/ParceirosBJ.png'
import IFF from '../../imgs/ParceirosIFF.png'
import RJ from '../../imgs/ParceirosRJ.png'
import MOTIM from '../../imgs/ParceirosMotim.png'
import logoEmbrapii from '../../imgs/Logo-embrapi-1.png'
import Joelma from '../../imgs/Joelma.jpg'

import './style.scss'

function Home(){

    return (

        <div id="mainHome">
            
            <Header />

                <section id="heroSection">
                    
                    <div className="heroWrapper">

                        <div className="heroTitle">
                            
                                <h1> O QUE PODEMOS ALCANÇAR JUNTOS? </h1>
                                {/* <h1> ALCANÇAR JUNTOS? </h1> */}
                            
                            
                            <h2> A empresa júnior que mais cresce no Norte Fluminense. </h2>

                            <div className="heroData">
                                <div className="heroCard"> 
                                    <p> +70 </p>
                                    <b>Vidas impactadas</b> 
                                </div>
                                <div className="heroCard"> 
                                    <p> +70 </p>
                                    <b> Sonhos realizados </b>
                                </div>
                                <div className="heroCard"> 
                                    <p> 100% </p>
                                    <b> Clientes satisfeitos </b>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="heroImgWrapper">

                            <img draggable="false" src={Astronauta1} alt=""/>

                        </div>

                    </div>

                </section> 

                <section id="services">

                    <h1> CONHEÇA NOSSOS SERVIÇOS </h1>
                    <p>Serviços de preço Júnior, com qualidade Sênior</p>

                    <div className="rowObjects">

                        <div className="servicesImgWrapper">

                            <img draggable="false" src={astronauta} alt=""/>

                        </div>

                        <div className="collumnObjects">
                            <div className="sectorServicearq">
                                <h2> Arquitetura e Urbanismo </h2>
                                <h3> Projetando o melhor para sua vida </h3>
                                <a href="http:/Servicos-Arquitetura"> Veja os serviços! </a>
                            </div>

                            <div className="sectorServicecomp">
                                <h2> Desenvolvimento e Tecnologia </h2>
                                <h3> O impacto da tecnologia na sua vida </h3>
                                <a href="http:/Servicos-Computacao"> Veja os serviços! </a>
                            </div>

                            <div className="sectorServiceele">
                                <h2> Soluções Elétricas </h2>
                                <h3> Economizando para você e para o planeta </h3>
                                <a href="http:/Servicos-Eletrica"> Veja os serviços! </a>
                            </div>

                            <div className="sectorServiceauto">
                                <h2> Máquinas e Equipamentos </h2>
                                <h3> Facilitando a sua vida </h3>
                                <a href="http:/Servicos-Automacao"> Veja os serviços! </a>
                            </div>

                            <div className="sectorServicenegoc">
                                <h2> Gestão de Negócios </h2>
                                <h3> Facilitando a sua vida </h3>
                                <a href="http:/Servicos-Negocios"> Veja os serviços! </a>
                            </div>

                            <a href="http:/Servicos"> Conheça todos os nossos serviços </a>
                        </div>


                    </div>
                    

                </section>

                <section id="whyChooseUs">

                    <div className="chooseTextWrapper">

                        <div className="chooseText">

                            <h1>Acelere a realização dos seus sonhos</h1>

                            <p>A Aurea é uma empresa sem fins lucrativos, composta 100% por estudantes graduandos do IFF Centro. Toda renda é reinvestida em conhecimento para nossos membros, através de cursos, equipamentos, infraestrutura e etc. Todos são voluntários e estão aqui para se desenvolver profissionalmente e realizar sonhos. Todos os nossos projetos são supervisionados por professores orientadores, que garantem a qualidade do mesmo! são 5 anos de existência realizando sonhos. E aí, o que podemos alcançar juntos?</p>

                        </div>

                        <div className="chooseImgWrapper">

                            <img draggable="false" src={LuaRoxo} alt=""/>

                        </div>

                    </div>

                </section>

                <section id="feedbackCards">

                    <div className="feedbackCardsWrapper">

                        <div className="feedbackCards">
                            
                            <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div>
                            
                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="feedbackCards">

                            <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div>

                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="feedbackCards">

                            <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div>

                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                    </div>

                </section>
                
                <section id="ourPartners">

                    <h1> Nossos parceiros </h1>
                    <p> São nossa base e nosso maior orgulho, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    <div className="partnersCardsWrapper">

                        <div className="partnersCards">
                            
                            <div className="partnersImgWrapper">
                                <a href='http://www.riojunior.com.br/' target='_blank' rel="noreferrer"> <img src={RJ} alt="RioJunior"/> </a>
                            </div>

                            <div className="partnersText">

                                <h2> <a href='http://www.riojunior.com.br/' target="_blank" rel="noreferrer">RioJunior</a> </h2>
                                <p> Federação de Empresas Juniores do estado do Rio de Janeiro </p>

                            </div>

                        </div>
                       
                        <div className="partnersCards">

                            <div className="partnersImgWrapper">
                                <a href='https://brasiljunior.org.br/' target='_blank' rel="noreferrer">  <img src={BJ} alt="Brasil Júnior"/> </a>

                            </div>

                            <div className="partnersText">

                                <h2> <a href='https://brasiljunior.org.br/' target="_blank" rel="noreferrer">Brasil Júnior</a> </h2>
                                <p> Instância que representa as empresas juniores brasileiras </p>

                            </div>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper">
                                <a href='https://www.motim.me/' target='_blank' rel="noreferrer"> <img src={MOTIM} alt="Motim"/> </a>
                            </div>

                            <div className="partnersText">

                                <h2> <a href='https://www.motim.me/' target="_blank" rel="noreferrer">Motim</a> </h2>
                                <p> Organização bla bla bla </p>

                            </div>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper">
                                <a href='https://portal1.iff.edu.br/nossos-campi/campos-centro' target='_blank' rel="noreferrer"> <img src={IFF} alt="Instituto Federal Fluminense"/> </a>
                            </div>

                            <div className="partnersText">

                                <h2> <a href='https://portal1.iff.edu.br/nossos-campi/campos-centro' target="_blank" rel="noreferrer">Instituto Federal Fluminense</a>  </h2>
                                <p> Organização bla bla bla </p>

                            </div>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper">
                                <a href='https://embrapii.org.br' target='_blank' rel="noreferrer"> <img src={logoEmbrapii} alt="Instituto Federal Fluminense"/> </a>
                            </div>

                            <div className="partnersText">

                                <h2> <a href='https://embrapii.org.br' target="_blank" rel="noreferrer">Polo de inovação / Embrapii</a>  </h2>
                                <p> Organização bla bla bla </p>

                            </div>

                        </div>

                    </div>

                </section>

            <WhatsappButton />

            <Footer />

        </div>
        
    )
}

export default Home;