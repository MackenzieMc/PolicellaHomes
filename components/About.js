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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque delectus deleniti enim rerum a unde fuga, odio corporis libero magnam. Quas qui consectetur ad assumenda obcaecati praesentium voluptas tempore saepe amet illum, facere placeat dolore earum ab quo possimus necessitatibus libero beatae consequuntur deserunt eos maxime sed itaque sapiente!</p>
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