import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr'




function NavigationBar() {

    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const router = useRouter()
    
    useEffect(() => {
        function handleScroll() {
            const isTop = window.scrollY < 500;
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

    const closeMobileNav = () => {
        setOpen(false);
    };

    return (
        <nav className={`navAbs ${scrolled ? 'fixedBar' : 'navAbs'}`}>
                    <ul className='navigationContainer' >
                        <li>
                            <Link href="/"
                                className={router.pathname == "/" ? "active" : ""}
                            >Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/AboutUs"
                                className={router.pathname == "/AboutUs" ? "active" : ""}
                            >About Us</Link>
                        </li>
                        <li>
                            <Link href="/Model-Homes"
                                className={router.pathname == "/Model-Homes" ? "active" : ""}
                            >Model Homes</Link>
                        </li>
                        <li>
                            <Link href="/Developments"
                                className={router.pathname == "/Developments" ? "active" : ""}
                            >Developments</Link>
                        </li>
                        <li>
                            <Link href="/Gallery"
                                className={router.pathname == "/Gallery" ? "active" : ""}
                            >Gallery</Link>
                        </li>
                        <li>
                            <Link href="/ContactUs"
                                className={router.pathname == "/ContactUs" ? "active" : ""} 
                            >Contact Us</Link>
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
                            transition: 'transform 0.7s ease-in-out',
                            left: '0'
                        }}>
                        <li>
                            <Link 
                                href="/" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/" ? "active" : ""
                                }>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/AboutUs" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/AboutUs" ? "active" : ""
                                }>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/Model-Homes" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/Model-Homes" ? "active" : ""
                                }>
                                Model Homes
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/Developments" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/Developments" ? "active" : ""
                                }>
                                Developments
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/Gallery" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/Gallery" ? "active" : ""
                                }>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/ContactUs" 
                                onClick={closeMobileNav} 
                                className={router.pathname == "/ContactUs" ? "active" : ""
                                }>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
        </nav>
    )
}

export default NavigationBar 