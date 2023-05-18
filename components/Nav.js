import Link from "next/link"
import { useState, useEffect } from "react"

function NavigationBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const isTop = window.scrollY < 50;
            setScrolled(!isTop);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    

    

    
    return (
        <nav className={`navAbs ${scrolled ? 'fixedBar' : 'navAbs'}`}>
            {/* <div className="logoContainer">
                <Link href="/">Policella Homes Logo</Link>
            </div> */}
            <ul className="navigationContainer">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link href="/Model-Homes">Model Homes</Link>
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
            <div className="mobileMenuContainer">

            </div>
        </nav>
    )
}

export default NavigationBar 