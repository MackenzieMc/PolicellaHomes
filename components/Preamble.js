import Link from "next/link"
import Image from "next/image"
import pr1 from '../public/images/preamble6.JPG'
import pr2 from '../public/images/preamble3.JPG'
import pr3 from '../public/images/divOne.jpg'
import pr4 from '../public/images/aboutOne.jpg'


function Preamble () {
    return (
        <section className="preamble">
            <div className=" preambleSection aboutWrapper">
                <div className="preambleTitleTextContainer">
                    <p>Who we are</p>
                    <h2>Crafting quality homes <span className="greenText">tailored to perfection</span></h2>
                </div>
                <div className="preambleTextContainer">
                    <div className="preambleMainTextContainer">
                        <p>Founded by Vince Policella Sr. in 1984, Policella Homes is a family business known for delivering honest and quality custom homes.</p>
                        <p>Crafting homes that reflect your unique lifestyle. Collaborating closely to bring your vision to life. From concept to completion, we prioritize every detail. Trust us to turn your dream into a reality.</p>
                        <p className="lightGray">With Policella Homes, you can trust that your future home will be crafted with utmost care and attention to detail, ensuring a seamless and enjoyable building experience. Contact us now and let's turn your dream into a reality.</p>
                        <Link href='/AboutUs'>Learn more</Link>
                    </div>
                    <div className="checkOutContainer">
                        <div className="imageGroupContainer">
                            <div className="imageContainer">
                                <Image src={pr1} fill contain="true" alt="Test" priority style={{ objectFit: "cover" }} />
                            </div>
                            <div className="imageContainer">
                                <Image src={pr3} fill contain="true" alt="Test" priority />
                            </div>
                        </div>

                        <div className="imageGroupContainer">
                            <div className="imageContainer">
                                <Image src={pr4} fill contain="true" alt="Test" priority />
                            </div>
                            <div className="imageContainerLong">
                                <Image src={pr2} fill contain="true" alt="Test" priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preamble