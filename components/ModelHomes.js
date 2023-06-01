import Link from "next/link"
import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function ModelHomes(props) {
    const homes = props
    const basePath = '/images/'
    return (
        <section className="sectionBackground">
            <div className="wrapper">
                <div className="sectionTitleTextContainer">
                    <div className="mainTitleTextContainer">
                        <p>Find the right home for you</p>
                        <h2>Check out our available model homes</h2>
                        <div className="seeMoreContainer">
                            <Link href="/Model-Homes">View more homes</Link>
                        </div>
                    </div>


                    <div className="modelHomesContainer">
                    {

                            Object.values(homes).splice(0,3).map(data =>
                                <div className="modelHomesCard" key={data.id}>
                                    <Link href={{
                                        pathname: `/Model-Homes/${data.id}`
                                    }}>
                                        <div className="modelHomesImgContainer">
                                            <Image src={`${basePath}${data.image}`} alt="" fill objectFit="cover" priority/>
                                        </div>
                                        <div className="modelHomesCardTextContainer">
                                            <div className="modelHomeNameAndLocationContainer">
                                                <div className="modelNameContainer">
                                                    <h3>{data.address}</h3>
                                                </div>
                                                <div className="modelNameLocation">
                                                    <p>{data.city}</p>
                                                </div>
                                            </div>
                                            <div className="modelInformationBar">
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.bedroom} Bed |</p>
                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.bathroom} Bath |</p>
                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.garage} Garage |</p>
                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.square} sq. ft.</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                    } 
                    </div>
                </div>

            </div>
        </section>
    )
}
