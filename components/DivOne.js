import Image from "next/image"
import breakImage from '../public/images/divOne.jpg'

function divOne () {
    return (
        <section className="oddSection">
            <div className="imageBreakContainer">
                <Image src={breakImage} fill objectFit="cover" priority alt="null"/>
            </div>
        </section>
    )
}

export default divOne; 