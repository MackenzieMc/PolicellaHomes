import Link from "next/link"
import { useState, useEffect } from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr'

function NavigationBar() {

    const [open, setOpen] = useState(false)
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
    
    const handleClick = function () {
        setOpen(!open)
    }

    return (
        <nav className={`navAbs ${scrolled ? 'fixedBar' : 'navAbs'}`}>
            {/* <div className="logoContainer">
                <Link href="/">Policella Homes Logo</Link>
            </div> */}
                    <ul className='navigationContainer' >
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
                {
                    !open ?
                    <button onClick={handleClick} className='iconButton'><RxHamburgerMenu /></button>

                    : 
                    <button onClick={handleClick} className='iconButton'><GrClose /></button>
                }
            </div>
                    <ul className={open ? `mobileNavContainer open` : 'mobileNavContainer'}
                    
                        style={{
                            transform: open ? 'translateX(0)' : 'translateX(-100%)',
                            transition: 'transform 0.3s ease-in-out',
                            left: '0'
                        }}>
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

        </nav>
    )
}

export default NavigationBar 