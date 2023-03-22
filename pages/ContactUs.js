// import "friendly-challenge/widget";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import mapboxgl from '!mapbox-gl'; 
import { useEffect, useState, useRef } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFja2VuemllbWNjIiwiYSI6ImNsZXJxc3Z1cDB2NGYzb3B2YzhqcjV2cXIifQ.iy5bG1cZQhPDKsrivRCqjg';
function ContactUs () {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.284660);
    const [lat, setLat] = useState(43.018180);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false,
        });
    });

    return (
        <>
            <header className='headerText contactHeaderBackground'>
                <h2>General Inquiries</h2>
                <p>Ask a question or leave feedback.</p>
            </header>
            <section className="contactSection">
                <div className="wrapper">
                    <div className="contactTitleContainer">
                        <p>Complete the form below and we will be in touch in a timely manner. Alternatively, contact me personally at vincepolicella@cogeco.ca</p>
                    </div>
                    <div className="formAndTextContainer">
                        <div className="formContainer">
                            <form action="">
                                <h3>Contact Information</h3>
                                <div className="nameContainer">
                                    <div className="firstNameContainer">
                                        <label htmlFor="Name">First Name</label>
                                        <input type="text" id="firstName"/>
                                    </div>
                                    <div className="lastNameContainer">
                                        <label htmlFor="Name">Last Name</label>
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

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                                <div className="frc-captcha" data-sitekey="<FCMON3HCAL59VK3O>"></div>

                                <input type="submit" value="Submit" className="buttonSubmit"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mapAndContactInfoContainer">

                    <div className="mapContainer">
                        <div ref={mapContainer} />
                    </div>

                    <div className="contactInfoContainer">
                        <div className="addressContainer">
                            <div className="iconContainer">
                                <FaHome />
                            </div>
                            <div className="locationTextContainer">
                                <p>945 South Pelham Rd <br />Welland, Ontario</p>
                            </div>
                        </div>
                        <div className="phoneContainer">
                            <div className="iconContainer">
                                <BsFillTelephoneFill />
                            </div>
                            <div className="phoneTextContainer">
                                <p>905-892-9897</p>
                            </div>
                        </div>
                        <div className="emailContainer">
                            <div className="iconContainer">
                                <MdEmail />
                            </div>
                            <div className="emailTextContainer">
                                <p>vincepolicella@cogeco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs 