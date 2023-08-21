import Link from "next/link"
import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'


function About () {
    return (
        <section>
            <div className="wrapper aboutUsWrapper">
                <div className="aboutContainer">
                    <p>Here to help</p>
                    <h2>Have any questions?</h2>
                    <div className="aboutTextContainer">
                        <p>We're here to assist you every step of the way in your homebuilding journey. Whether you have questions, want to learn more about our services, or are ready to start building your dream home, we're just a phone call or email away. Contact us today and let's begin the conversation. Our friendly team is ready to provide you with the information and guidance you need to make informed decisions. Reach out to us using the contact details below.</p>
                        <Link href='/ContactUs'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About