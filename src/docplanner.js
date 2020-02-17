import React, { Component } from 'react'


const header = { img: "https://www.docplanner.com/img/logo-default-group-en.svg?v=1", list: ["About us", "Career", "Department"] }
const footer = {paragraphe:"This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser."}
const body={titleOussema: "Making the healthcare experience more human",p1:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."}

class Docplanner extends Component {
    render() {
        return (
            <div className='docplanner'>
                <HeadDocplanner header={header} />
                <BodyDocplanner body={body} />
                <FooterDocplanner footer={footer} />

            </div>
        );
    }
}

const HeadDocplanner = (props) => {
    return (
        <div class="docplanner-nav">
            <div class="Docplanner-logo">
                <img class="logo-docplanner" src={props.header.img} alt="Docplanner Group" />
            </div>
            <div class="nav-bar">
                <ul class="nav-bar-sections">
                    {props.header.list.map(el => {
                        return <li class="career-button" >{el}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

const BodyDocplanner = (props) => {
    return (
        <main>
            <section class="intro">
                <div class="intro-logo"><img class="lead-logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x" /></div>
                <h1 class="intro-title">
                    {props.body.titleOussema}
                </h1>
                <div class="description">
    <p class="intro-paragraph">{props.body.p1}</p>
                    <p class="intro-paragraph">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
                </div>
            </section>
            <section class="services">
                <div class="service-card service-card-patients">
                    <div class="service-per-country">For patients</div>
                    <h2 class="service-card-title">
                        Find a doctor, book a visit and solve any health-related doubt
            </h2>
                    <div class="service-card-content">
                        <select class="service-card-switcher">
                            <option value="">CHOOSE COUNTRY</option>
                            <option value="http://www.doctoraliar.com">Argentina</option>
                            <option value="http://www.doctoralia.com.au">Australia</option>
                            <option value="http://www.doctoralia.com.br">Brazil</option>
                            <option value="http://www.doctoralia.cl">Chile</option>
                            <option value="http://www.doctoralia.co">Colombia</option>
                            <option value="http://www.znamylekar.cz">Czech</option>
                            <option value="http://www.doctoralia-fr.com">France</option>
                            <option value="http://www.miodottore.it">Italy</option>
                            <option value="http://www.doctoralia.com.mx">Mexico</option>
                            <option value="http://www.doctoralia.pe">Peru</option>
                            <option value="http://www.znanylekarz.pl">Poland</option>
                            <option value="http://www.doctoralia.com.pt">Portugal</option>
                            <option value="http://www.doctoralia.es">Spain</option>
                            <option value="http://www.doktortakvimi.com">Turkey</option>
                            <option value="http://www.doctoralia.co.uk">UK</option>
                        </select>

                    </div>
                    <img class="service-card-image" src="https://www.docplanner.com/img/screen-marketplace@2x.png" />

                </div>
                <div class="service-card service-card-doctors">For doctors
    <h2 class="service-card-title">
                        Save time managing visits and cut no-shows by half
    </h2>
                    <img class="service-card-image" src="https://www.docplanner.com/img/screen-saas@2x.png" />
                </div>
            </section>
        </main>
    )
}
const FooterDocplanner = (props) => {
    return (
        <footer class="docplanner-footer">
            <p>{props.footer.paragraphe}</p>
            
</footer>
    )
}

export default Docplanner;
