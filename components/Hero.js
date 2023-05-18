import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton,
} from '../components/HeroButtons'

import Link from 'next/link'
import Image from 'next/image'
import HeroImageOne from '../public/images/Hero2.jpg'
import HeroImageTwo from '../public/images/home1.jpg'
import HeroImageThree from '../public/images/development2.jpg'


const Hero = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
        emblaApi,
    ])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
        emblaApi,
    ])
    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide slideOne">
                            <div className="opacityCover"></div>
                            <Image src={HeroImageOne}
                                fill={true} 
                                priority={true} 
                                style={{ objectFit: "cover"}} 
                            />
                            <div className="heroMainText">
                                <h1>Policella Homes: Niagara's trusted home builder</h1>
                                <h3>old world craftsmanship<br></br>meets<br></br>modern day design<br></br></h3>
                            </div>
                        </div>
                        <div className="embla__slide slideTwo">
                            <div className="opacityCover"></div>
                            <Image src={HeroImageTwo}
                                fill={true}
                                priority={true}
                                style={{ objectFit: "cover" }} 
                            />
                            <div className="heroContainer">
                                <div className="heroTextContainer">
                                    <h2>711 Gaiser Road</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugit molestias corrupti reprehenderit molestiae eius ad a itaque excepturi? Atque?</p>
                                    <div className="buttonContainer">
                                        <Link className="viewOne"href={'/Model-Homes'}>View Home</Link>
                                        <Link className="viewAll" href={'/Model-Homes'}>View All Homes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="embla__slide slideThree">
                            <div className="opacityCover"></div>
                            <Image src={HeroImageThree}
                                fill={true}
                                priority={true}
                                style={{ objectFit: "cover" }} 
                            />
                            <div className="heroContainer">
                                <div className="heroTextContainer">
                                    <h2>Valleyway Estates</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos qui repudiandae a consectetur doloremque excepturi nostrum dolores expedita sed sunt.</p>
                                    <div className="buttonContainer">
                                        <Link className="viewOne" href={'/Developments'}>View Development</Link>
                                        <Link className="viewAll" href={'/Developments'}>View All Developments</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default Hero
