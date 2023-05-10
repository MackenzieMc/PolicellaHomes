import Link from "next/link"
import Image from "next/image"
import preambleImage from '../public/images/preamble.jpg'
function Preamble () {
    return (
        <section>
            <div className="wrapper">
                <div className="preambleTextContainer">
                    <div className="preambleMainTextContainer">
                        <h3>Building custom homes and lots in the Niagara region since 1984.</h3>
                        <p>Policella Homes, founded by Vince Policella Sr. in 1984, is a family business known for delivering honest and quality custom builds. With over 400 homes constructed, we collaborate with clients to design and construct homes that are practical and reflect your personal style, delivered on time and within budget.</p>
                    </div>
                    <div className="checkOutContainer">
                        <div className="checkOutImageContainer">
                            <Image src={preambleImage} fill contain="true" alt="Test" priority />
                        </div>
                        <p>Finely crafted, custom built</p>
                        <p>Let us make your dream home a reality.</p>
                        <Link href={'/Gallery'}>View our gallery</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preamble