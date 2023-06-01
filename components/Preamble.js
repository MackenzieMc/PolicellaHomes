import Link from "next/link"
import Image from "next/image"
import preambleImage from '../public/images/preamble.jpg'
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
                        <p>Founded by Vince Policella Sr. in 1984, Policella Homes is a family business known for delivering honest and quality custom builds.</p>
                        <p>Crafting homes that reflect your unique lifestyle. Collaborating closely to bring your vision to life. From concept to completion, we prioritize every detail. Trust us to turn your dream into a reality.</p>
                        <p className="lightGray">With Policella Homes, you can trust that your future home will be crafted with utmost care and attention to detail, ensuring a seamless and enjoyable building experience. Contact us now and let's turn your dream into a reality.</p>
                        <Link href='/AboutUs'>Learn more</Link>
                    </div>
                    <div className="checkOutContainer">
                        <div className="imageGroupContainer">
                            <div className="imageContainer">
                                <Image src={preambleImage} fill contain="true" alt="Test" priority />
                            </div>
                            <div className="imageContainer">
                                <Image src={preambleImage} fill contain="true" alt="Test" priority />
                            </div>
                        </div>

                        <div className="imageGroupContainer">
                            <div className="imageContainer">
                                <Image src={preambleImage} fill contain="true" alt="Test" priority />
                            </div>
                            <div className="imageContainerLong">
                                <Image src={preambleImage} fill contain="true" alt="Test" priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preamble