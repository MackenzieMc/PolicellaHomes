import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton,
} from '../components/HeroButtons'

import Link from 'next/link'
import Image from 'next/image'
import mainHero from '../public/images/mainHero.jpg'


const Hero = (props) => {

    return (
        <>
        <div className="heroText">
                <div className="headerTextContainer">
                    <div className="fontContainer">
                        <h1>Policella Homes</h1>
                        <p>Niagara's trusted home builder.</p>
                        <h2>Where old world craftsmanship meets modern day design</h2>
                        <p>Over 400 homes crafted with care, bringing your unique vision to life.</p>
                        <div className="linkContainer">
                            <Link href='/Model-Homes'>Find a home</Link>
                            <Link href='/AboutUs'>Our history</Link>
                        </div>
                    </div>
                </div>
                <div className="headerImageContainer">
                    <Image
                        src={mainHero}
                        fill
                        loading='eager'
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", filter: "brightness(90%)", position: "absolute" , objectPosition: "left"}}
                        alt='The Policella home office'
                    />
                </div>
        </div>
        </>
    )
}

export default Hero
