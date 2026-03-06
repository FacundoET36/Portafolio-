import React from 'react';
import './About.css';
import HtmlLogo from "../resources/html-css.png"
import JsLogo from "../resources/js-logo.png"
import JavaLogo from "../resources/java-logo.png"
import PythonLogo from "../resources/python-logo.png"
import ReactLogo from "../resources/react-logo.png"
import NjsLogo from "../resources/nodejs-logo.png"



const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">Sobre mí</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">Soy <strong>Facundo</strong>. ¡Gracias por entrar a mi web!</p>

                        <p className="about-description">
                            Desde 2023 estudio y practico programación como carrera profesional y estoy interesado en el <strong>Desarrollo Web</strong>.
                            Mi enfoque esta centrado tanto en <strong>Frontend</strong> como <strong>Backend</strong>
                        </p>

                        <p className="about-title">Mis objetivos</p>
                        <div className="title-underline"></div>
                        <p className="about-description">Mi plan es poder participar en proyectos para poder adquirir experiencia, esto me ayuda a poder seguir aprendiendo y formarme para 
                            introducirme en el mundo laboral como <strong>Full Stack Developer.</strong>
                            
                        </p>


                    </div>



                    <div className="about-skills">
                        <h2 className="skills-title">Actualmente trabajo con tecnologías como...</h2>
                        <div className="skill-list-container">
                            <ul className="skill-list">
                                <div className="skill-html">
                                    <div className="skill-html-logo"><img src={HtmlLogo} alt="" width="60px" height="60px" /></div>
                                    <div className="skill-list-technology">HTML y CSS</div>
                                </div>
                                <div className="skill-js">
                                    <div className="skill-js-logo"><img src={JsLogo} alt="" width="50px" height="50px"/></div>
                                    <div className="skill-list-technology">Javascript</div>
                                </div>
                                <div className="skill-js">
                                    <div className="skill-java-logo"><img src={JavaLogo} alt="" width="50px" height="50px"/></div>
                                    <div className="skill-list-technology">Java</div>
                                </div>
                                <div className="skill-js">
                                    <div className="skill-py-logo"><img src={PythonLogo} alt="" width="50px" height="50px"/></div>
                                    <div className="skill-list-technology">Python</div>
                                </div>
                                <div className="skill-js">
                                    <div className="skill-react-logo"><img src={ReactLogo} alt="" width="53px" height="50px"/></div>
                                    <div className="skill-list-technology">React</div>
                                </div>                               
                                <div className="skill-js">
                                    <div className="skill-nodejs-logo"><img src={NjsLogo} alt="" width="50px" height="55px"/></div>
                                    <div className="skill-list-technology">Node JS</div>
                                </div>        

                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )

    
}

export default About;