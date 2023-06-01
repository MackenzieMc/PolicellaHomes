import Head from 'next/head';
import Image from 'next/image';
import ContactImageHeader from '../public/images/contactUsbackground.jpg'

export default function ContactUs () {
    return (
        <>
            <Head>
                <title>Contact Us | Policella Homes</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Reach out to us here at Policella Homes!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <header className='headerText contactHeaderBackground'>
                <div className="headerTextContainer">
                    <div className="fontContainer">
                        <h2>Any questions?</h2>
                        <p>Reach out to our team here, we will be in contact within 24-48 business hours!</p>
                    </div>
                </div>
                <div className="headerImageContainer">
                    <Image
                        src={ContactImageHeader}
                        alt="A house covered with greenery"
                        fill
                        loading='eager'
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", filter: "brightness(80%)", position: "absolute" }} 
                    />
                </div>
            </header>
            <section className="contactSection">
                <div className="wrapper">
                    <div className="formAndTextContainer">
                        <div className="formContainer">
                        <div className="contactTitleContainer">
                            <p>Complete the form below and we will be in touch in a timely manner. Alternatively, contact me personally at vincepolicella@cogeco.ca</p>
                        </div>
                            <form action="">
                                <h3>Contact Information</h3>
                                <div className="nameContainer">
                                    <div className="firstNameContainer">
                                        <label htmlFor="Name">First Name:</label>
                                        <input type="text" id="firstName"/>
                                    </div>
                                    <div className="lastNameContainer">
                                        <label htmlFor="Name">Last Name:</label>
                                        <input type="text" id="lastName" />
                                    </div>
                                </div>

                                <div className="emailAndPhoneContainer">
                                    <div className="emailContainer">
                                        <label htmlFor="Email">Email:</label>
                                        <input type="email" id="Email"/>
                                    </div>
                                    <div className="phoneContainer">
                                        <label htmlFor="Phone">Phone:</label>
                                        <input type="text" id="Phone"/>
                                    </div>
                                </div>

                                <h3>Reason for Contact</h3>

                                <label htmlFor="Subject">How can we help you?</label>
                                <input type="text" className="subjectInput"/>

                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                                <div className="frc-captcha" data-sitekey="<FCMON3HCAL59VK3O>"></div>

                                <input type="submit" value="Submit" className="buttonSubmit"/>
                            </form>
                        </div>
                        <div className="mapContainer">
                            <iframe title="Google Maps"
                            style={{ width: "100%", height: "100%", border: "none" }}
                            width="500"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Policella%Homes%20&t=&z=13&ie=UTF8&iwloc=&output=embed">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

