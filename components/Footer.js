import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../public/images/policellahomeslogo.png'
import tarionLogo from '../public/images/TarionLogo.png'
import NHBALogo from '../public/images/ohba-logo.png'

function Footer () {
    return (
        <footer>
            <div className="wrapper">
                <div className="footerTextandLogoContainer">
                    <div className="footerTextContainer">
                        <h4>Where old world craftsmanship meets modern day design.</h4>

                        <address>
                            <p>
                                <a href="https://www.google.com/maps/place/Policella+Homes/@43.0184264,-79.2871268,17z/data=!3m1!4b1!4m6!3m5!1s0x89d349861cdaa609:0x210eff36c5c69052!8m2!3d43.0184264!4d-79.2849381!16s%2Fg%2F1tfrc4v4" className="streetAddress">
                                    <span>945 South Pelham Rd</span>
                                    <br />
                                    <span>Welland, Ontario L3C 3E2</span>
                                </a>
                            </p>
                            <p>Phone: <a href="tel: +1(905)-892-9897">905-892-9897</a></p>
                            <p>E-mail: <a href="mailto:vincepolicella@cogeco.ca">vincepolicella@cogeco.ca</a></p>
                        </address>
                        <div className="socialLinks">
                            <Link href={'https://facebook.com/people/Policella-Homes/61553342220892/'}>
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", width: '20px', marginRight: '10px' }} />
                            </Link>
                            <Link href={'https://www.instagram.com/policellahomes/'}>
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", width: '20px'}} />
                            </Link>
                        </div>
                    </div>
                        <div className="footerLinksContainer">
                            <nav>
                                <ul className="footerNavigationContainer">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
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

                    <div className="footerCertificationContainer">
                        <div className="footerLogoContainer">
                            <Image src={Logo} height={150} objectFit="contain" alt="Test" priority />
                        </div>
                        <div className="footerCertification">
                            <Link href={'https://www.tarion.com/'}className="footerCertificationImage">
                                <Image src={tarionLogo} height={50} width={50} alt="Test"/>
                            </Link>
                            <Link href={'https://nhba.ca/'} className="footerCertificationImageTwo">
                                <Image src={NHBALogo} height={50} width={125} alt="Test"/>
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