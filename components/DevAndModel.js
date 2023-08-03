import useEmblaCarousel from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton,
} from '../components/HeroButtons'

import Link from 'next/link'
import Image from 'next/image'

function DevAndModel (props) {

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
        <section>
            <div className="aboutWrapper">
                <div className="DevAndModelTitleTextContainer">
                    <p>Find the right home for you</p>
                    <h2>Discover Our show homes and new neighborhoods</h2>
                </div>
                <div className="buttonContainer">
                    <button>Model Homes</button>
                    <button>Developments</button>
                </div>


            <div className="modelHomeComponentContainer">
                
            </div>

            </div>

        </section>
    )
}

export default DevAndModel