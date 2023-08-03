import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import FriendlyCaptcha from '../components/FriendlyCaptcha';
import { useForm, ValidationError } from '@formspree/react';
import ContactImageHeader from '../public/images/contactUsbackground.jpg'

export default function ContactUs () {
    const [captchaSolved, setCaptchaSolved] = useState(false);
    const [state, handleSubmit] = useForm("mbjvrkda");

    useEffect(() => {
        // Whenever captchaSolved changes, check if the form should be enabled or disabled
        const formSubmitButton = document.getElementById("formSubmitButton");
        if (formSubmitButton) {
            formSubmitButton.disabled = !captchaSolved;
        }
    }, [captchaSolved]);

    const handleCaptchaSolved = (solution) => {
        console.log("Captcha was solved. The form can be submitted.");
        console.log(solution);
        setCaptchaSolved(true);
    };

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
                            {state.succeeded && <p>Thanks for joining!</p>}
                            <form 
                                onSubmit={handleSubmit}>
                                <h3>Contact Form</h3>
                                <div className="nameContainer">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="Name" name='name'/>
                                </div>

                                <div className="emailAndPhoneContainer">
                                    <div className="emailContainer">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="Email" name='email'/>
                                    </div>
                                    <div className="phoneContainer">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" id="Phone" name='phone'/>
                                    </div>
                                </div>

                                <label htmlFor="subject">How can we help you?</label>
                                <input type="text" name='subject' className="subjectInput"/>

                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                                <FriendlyCaptcha onCaptchaSolved={handleCaptchaSolved} />

                                <input
                                    type="submit"
                                    value="Submit"
                                    className="buttonSubmit"
                                    id="formSubmitButton" // Add an ID to the submit button for easier access
                                    disabled={!captchaSolved}
                                />
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

