import Link from "next/link"

function NavigationBar() {
    return (
        <nav>
            <div className="logoContainer">
                <Link href="/">Policella Homes Logo</Link>
            </div>
            <ul className="navigationContainer">
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
                    <Link href="/ContactUs" className="contactButton">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar 