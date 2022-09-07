import { React } from 'react';
import { Link } from "react-router-dom";

import chute from '../../imgs/videoChute.mp4' //imagem de fundo
import AureaWorldCup from '../../imgs/AureaWorldCup.png'
//import PSPhases from '../../imgs/AureaWorldCupTabela.png'
import ArrowDown from '../../imgs/arrow.svg'
import Campo from '../../imgs/campo.jpg'
import AureaBall from '../../imgs/AureaBall.png'
import videoAstronauta from '../../imgs/videoAstronauta.mp4'
import sendBackHome from '../../imgs/SetaVoltar.png'

import './style.scss'

function PS() {

    return (

        <main id="mainPS">

            <section id="heroSectionPS">

                <div className="heroWrapperPS">

                    <video autoplay="true" loop muted src={chute} className="backgroundPS"/>

                    <div className="logoPSWrapper">

                        <img className="AureaWorldCup" draggable="false" src={AureaWorldCup} alt=""/>
                    
                    </div>

                    <div className="textHome">
                    
                        <h1>Venha fazer parte da seleção Aureana!</h1>
                        <h4>Processo seletivo 2022.2</h4>
                    
                        <a href="#PSInfosSection"><img src={ArrowDown} alt="Ver informações" /></a>

                    </div>

                </div>

                <div className="sendBackHome">

                    <Link to="/"><img className="sendBackHome" draggable="false" src={sendBackHome} alt=""/></Link>

                </div>

            </section>

            <section id="PSInfosSection">

                <div className="introPSInfos">

                    <h1>Sua hora entrar em campo chegou!</h1>

                    <p><strong>Now is All</strong>, quando os pulsos aceleram e todas as emoções e experiências que levaram ao agora se conectam! Chegou o momento de preparar o seu time e entrar em campo! Está aberto o PROCESSO SELETIVO 2022.2 da Aurea Soluções e Projetos, <strong>Aurea World Cup</strong>. Venha fazer parte da <strong>Seleção Aureana!</strong> Juntos somos um só.</p>

                    <p>A Aurea é uma empresa júnior do Instituto Federal Fluminense - campus Campos Centro. Fundada no ano de 2016, iniciamos nossos primeiros passos como empresa referência da região Norte Fluminense. Oferecendo serviços na área de <strong>Arquitetura e Urbanismo, Engenharia de Computação, Engenharia de Controle e Automação e Engenharia Elétrica</strong>, passamos a amadurecer como empresa, e alcançamos a tão sonhada federação no ano de 2018, sendo reconhecida pelo Movimento Empresa Júnior (MEJ) como uma Empresa Júnior. Nossa excelência, esforço e dedicação em projetos nos retornou diversas premiações, reconhecendo a Aurea como uma empresa "Bi impacto", o que significa que fomos capazes de bater todas nossas metas anuais por dois anos consecutivos. Atualmente, estamos em busca do tão sonhado "Tri-impacto".</p>

                    <p>Na Aurea, estamos sempre na busca de pessoas que estejam dispostas a inovar e se desenvolver. Aqui aprendemos e erramos juntos, e estamos em constante evolução, sempre com o apoio um do outro. Estamos sempre buscando impactar, e precisamos de você para isso. A nossa missão é formar empreendedores de impacto através do jeitinho Aureano de ser: <strong>A</strong>paixonado, <strong>U</strong>nido, <strong>R</strong>esponsável, <strong>E</strong>mpático, <strong>A</strong>udacioso, <strong>N</strong>otável e <strong>O</strong>bstinado.</p>

                </div>

                <section id="PSPhases">

                    <h2>Etapas</h2>

                    {/*<img className="PSPhases" draggable="false" src={PSPhases} alt=""/>*/}

                    <div className="PSStoryline">

                        <div className="storyline" />

                        <div id="A" className="storylineText">

                            <h3>Lançamento do edital e inscrições</h3>

                            <h4>19/09/22 a 03/10/22</h4>

                            <p>

                                Para entrar em campo, você precisa fazer sua inscrição através do

                                <a
                                    target="_blank"
                                    href="https://forms.gle/zgdoSnofaPNxKNjUA" rel="noreferrer"> Formulário de inscrição
                                </a> do Processo Seletivo 2022.2. Lembre-se de ler o

                                <a
                                    target="_blank"
                                    href="https://www.canva.com/design/DAFLjpNOYDk/nYINoW3PaTlJlTYFrdQ2YA/view#10" rel="noreferrer"> Edital
                                </a> antes de realizar sua inscrição.

                            </p>

                        </div>

                        <div id="B" className="boxStoryline">

                            <h1>1</h1>

                        </div>

                        <div id="C" className="boxStoryline">

                            <h1>2</h1>

                        </div>

                        <div id="D" className="storylineText">

                            <h3>Início da marcação de entrevistas</h3>

                            <h4>04/10/22 a 07/10/22</h4>

                            <p>Após analizarmos suas informações, entraremos em contato para marcarmos a data de sua entrevista com os nossos entrevistadores.</p>

                        </div>

                        <div id="E" className="storylineText">

                            <h3>Entrevistas e dinâmica de grupo</h3>

                            <h4>10/10/22 a 27/10/22</h4>

                            <p>Nessa etapa, você participará de uma entrevista com os nossos entrevistadores. Além disso, haverá um momento de dinâmica de grupo com os outros membros inscritos. Fique tranquilo(a) quanto a isso, apenas queremos conhecer melhor suas histórias e desafios. </p>

                        </div>

                        <div id="F" className="boxStoryline">

                            <h1>3</h1>

                        </div>

                        <div id="G" className="boxStoryline">

                            <h1>4</h1>

                        </div>

                        <div id="H" className="storylineText">

                            <h3>Divulgação dos trainees selecionados</h3>

                            <h4>31/10/22</h4>

                            <p>Os da fase anterior serão informados sobre o seu desempenho, e, caso aprovados, passarão para a etapa de processo trainee.</p>

                        </div>

                        <div id="I" className="storylineText">

                            <h3>Início do processo trainee</h3>

                            <h4>01/11/22</h4>

                            <p>Como último passo antes de se tornar um Aureano, você irá passar por um processo trainee para conhecer melhor o funcionamento de nossa empresa, passando por capacitações e diversas pautas preparadas especialmente pelos nossos membros para você.</p>

                        </div>

                        <div id="J" className="boxStoryline">

                            <h1>5</h1>

                        </div>

                    </div>

                    <a id="buttonRegister" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfUq_25827tfkPhoxq_w5ypbj8B0RLLKXvRIZ8CniRZ65D68A/viewform" rel="noreferrer">Inscrever-se</a>

                </section>

                <section id="OurDifferential">

                    <div className="imgRegister">

                        <img src={Campo} alt="" />

                        <span>Mais que uma empresa</span>

                    </div>

                    <div className="textDifferential">

                        <h1>Somos uma <br />FAMÍLIA!</h1>

                        <p>Nossa história vai muito além da Arquitetura e Urbanismo, Engenharia de Computação, Engenharia de Controle e Automação e Engenharia elétrica. Nós construímos laços, desenvolvemos sonhos, automatizamos ideias e energizamos o mundo!</p>

                        <p>A Aurea foi criada com um único objetivo: <strong>impactar!</strong> Aqui prezamos pela satisfação de nossos membros. Não formamos apenas membros preparados para o mercado de trabalho. Formamos lideranças. Formamos pessoas capazes de superar qualquer desafio independente do grau de dificuldade. E acima de tudo: <strong>formamos laços!</strong> Se engana quem pensa que a Aurea é apenas uma empresa júnior. Somos muito mais do que isso! <strong>SOMOS UMA FAMÍLIA! E chegou sua hora de fazer parte dela.</strong></p>

                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfUq_25827tfkPhoxq_w5ypbj8B0RLLKXvRIZ8CniRZ65D68A/viewform" rel="noreferrer">Quero fazer parte!</a>

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
                                        href="https://www.canva.com/design/DAFLjpNOYDk/nYINoW3PaTlJlTYFrdQ2YA/view#10" rel="noreferrer">Edital
                                    </a>.
                                </span>
                            </li>

                        </ul>

                        <div className="aboutUsPS">

                            <h1>O que é uma empresa júnior?</h1>

                            <p>A Empresa Júnior (EJ) é um empreendimento sem fins lucrativos. Sua organização é formada por estudantes de graduação e orientada por professores. É através de uma empresa júnior que os estudantes podem pôr em prática tudo aquilo que aprende dentro da sala de aula, antes mesmo de se formar. Nela, é possível desenvolver projetos e prestar serviços para pessoas ou empresas, fornecendo um amadurecimento acelerado.</p>

                            <p>De acordo com dados da Brasil Júnior, confederação que rege as Empresas Juniores do Brasil, existem mais de 1400 EJs espalhadas por mais de 260 universidades que realizam mais de 40 mil projetos por ano. Somente nesse ano, o MEJ já impactou mais de R$ 55.6 milhões na economia brasileira, que são integralmente reinvestidos na educação empreendedora dos estudantes. Sua missão é formar, por meio da vivência empresarial, empreendedores comprometidos e capazes de transformar o Brasil.</p>

                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfUq_25827tfkPhoxq_w5ypbj8B0RLLKXvRIZ8CniRZ65D68A/viewform" rel="noreferrer">Quero me inscrever</a>

                            <div className="imgPSWrapper">

                                <img src={AureaBall} alt="" />

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