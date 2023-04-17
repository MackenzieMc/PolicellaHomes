import Link from "next/link"
import Image from "next/image"
import preambleImage from '../public/images/preamble.jpg'
function Preamble () {
    return (
        <section>
            <div className="wrapper">
                <div className="preambleTextContainer">
                    <div className="preambleMainTextContainer">
                        <h3>Serving the Niagara region since <span className="preambleText">1984</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est esse recusandae rerum numquam blanditiis officiis quis dolorem sunt quae, ducimus temporibus molestias tenetur mollitia. Porro similique dolor animi recusandae!</p>
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