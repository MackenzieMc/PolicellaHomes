import Link from "next/link"
import AboutUsImage from '../public/images/AboutUsSectionPhoto.jpg';
import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'


function About () {
    return (
        <section>
            <div className="wrapper aboutUsWrapper">
                <div className="aboutContainer">
                    <div className="aboutImgContainer">
                        <Image src={AboutUsImage} fill contain="true" alt="Test" priority/>
                    </div>
                    <div className="aboutTextContainer">
                        <h3>Meet the Policellas</h3>
                        <p>Vince Policella Sr., a skilled mason from Italy, founded Policella Homes in Canada in 1984. His son, Vince Jr., joined the family business in 2001. Policella Homes is known for its honest and quality custom builds, with over 400 homes constructed. We work closely with our clients to design and build homes that meet their individual needs and personal style.</p>
                        <div>
                            <Link className="aboutUsLinkContainer" href='/AboutUs'>Learn more about us! <AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About