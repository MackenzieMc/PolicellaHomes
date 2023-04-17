import Image from "next/image"
import breakImage from '../public/images/imageBreakTwo.jpg'

function divTwo() {
    return (
        <section className="oddSection">
            <div className="imageBreakContainer">
                <Image src={breakImage} fill objectFit="cover" priority alt="null"/>
            </div>
        </section>
    )
}

export default divTwo; 