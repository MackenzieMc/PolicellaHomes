import { useState, useEffect, useCallback } from "react"

import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton,
} from '../components/HeroButtons'



export default function ModelHomes(props) {

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

    const homes = props
    const basePath = '/images/'
    return (
        <section className="sectionBackground">
            <div className="aboutWrapper">
                <div className="sectionTitleTextContainer">
                    <div className="mainTitleTextContainer">
                        <p>Find the right home for you</p>
                        <h2>Check out our available model homes</h2>
                    </div>
                    <div className="cardContainer">
                        <div className="embla">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                    {
                                        Object.values(homes).map(data => 
                                            
                                            <div className="embla__slide">
                                                <div className="homesCard">
                                                    <div className="cardImageContainer">
                                                        <Image src={`${basePath}${data.image}`} alt="" objectFit="contain" priority sizes="(max-width: 768px) 100vw" width={600} height={350}
                                                        // style={{borderRadius:'0px 25px 25px 25px'}}
                                                        
                                                        />
                                                    </div>
                                                    <div className="textContainer">
                                                        <h3>{data.address}</h3>
                                                        <p className="locationText">Location</p>
                                                        <p>{data.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                            )
                                    }
                                </div>
                            </div>
                            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> 
                        </div>

                    </div>
                    <div className="seeMoreContainer">
                        <Link href="/Model-Homes">Model Home Details</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
