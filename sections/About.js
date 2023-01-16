import Link from "next/link"
import AboutUsImage from '../public/images/AboutUsSectionPhoto.jpg';
import Image from "next/image"

function About () {
    return (
        <section className="sectionBackground">
            <div className="wrapper">
                <div className="aboutContainer">
                    <div className="aboutImgContainer">
                        {/* <Image src={AboutUsImage} contain /> */}
                    </div>
                    <div className="aboutTextContainer">
                        <h3>Meet the Policellas</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eaque delectus deleniti enim rerum a unde fuga, odio corporis libero magnam. Quas qui consectetur ad assumenda obcaecati praesentium voluptas tempore saepe amet illum, facere placeat dolore earum ab quo possimus necessitatibus libero beatae consequuntur deserunt eos maxime sed itaque sapiente!</p>
                        <Link href='/AboutUs'>Learn more about us!</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About