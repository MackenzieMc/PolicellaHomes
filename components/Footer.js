import Link from "next/link"
import Image from "next/image"
import tarionLogo from '../public/images/TarionLogo.png'

function Footer () {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerTextandLogoContainer">
                    <div className="footerTextContainer">
                        <div className="footerLogoContainer">

                        </div>
                        <h4>Where old world craftsmanship meets modern day design.</h4>
                        <div className="footerLinksContainer">
                            <nav>
                                <ul className="footerNavigationContainer">
                                    <li>
                                        <Link href="/AboutUs">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/ModelHomes">Model Homes</Link>
                                    </li>
                                    <li>
                                        <Link href="/Developments">Developments</Link>
                                    </li>
                                    <li>
                                        <Link href="/Gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link href="/ContactUs">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footerCertificationContainer">
                        <div className="footerCertification">
                            <div className="footerCertificationText">
                                <p>Ontario New Home Warranty Program Certified.</p>
                            </div>
                            <Link href={'https://www.tarion.com/'}className="footerCertificationImage">
                                <Image src={tarionLogo} height={50} width={50} alt="Test"/>
                            </Link>
                        </div>
                    </div>

                </div>

                <hr />

                <div className="footerDesignCopywrightContainer">
                    <div className="copyrightContainer">
                        <p className="footerCopy">&copy; Policella Homes 2023</p>
                    </div>
                    <div className="designContainer">
                        <p className="footerCopy">Designed and Developed by <Link href='/'>Mackenzie McClemont</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 