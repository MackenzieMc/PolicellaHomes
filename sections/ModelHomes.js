import Link from "next/link"
import modelHomes from '../public/data/model_homes_data.json'
import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'

function ModelHomes() {
    
    const basePath = '/images/'

    
    return (
        <section className="sectionBackground">
            <div className="wrapper">
                <div className="sectionTitleTextContainer">
                    <h2>Model Homes</h2>
                    <div className="subTextContainer">
                        <div className="findContainer">
                            <p>Find the right model for you!</p>
                        </div>
                        <div className="seeMoreContainer">
                            <Link href="/ModelHomes">View more Model Homes <span className="modelDevelopmentLink"><AiOutlineArrowRight /></span></Link>
                        </div>
                    </div>
                </div>

                <div className="modelHomesContainer">
                {

                    Object.values(modelHomes).splice(0,3).map((data) => {

                        return (

                            <div className="modelHomesCard">
                                <div className="modelHomesImgContainer">
                                    <Image src={`${basePath}${data.image}`} alt="" fill objectFit="cover" />
                                </div>
                                <div className="modelHomesCardTextContainer">
                                    <div className="modelHomeNameAndLocationContainer">
                                        <div className="modelNameContainer">
                                            <h3>{data.address}</h3>
                                        </div>
                                        <div className="modelNameLocation">
                                            <p><span>{data.city}</span></p>
                                        </div>
                                    </div>
                                    <div className="modelInformationBar">
                                        <div className="iconAndTextContainer">
                                            <div className="modelInfoTextContainer">
                                                <p>{data.bedroom} Bed |</p>
                                            </div>
                                        </div>
                                        <div className="iconAndTextContainer">
                                            <div className="modelInfoTextContainer">
                                                <p>{data.bathroom} Bath |</p>
                                            </div>
                                        </div>
                                        <div className="iconAndTextContainer">
                                            <div className="modelInfoTextContainer">
                                                <p>{data.garage} Garage |</p>
                                            </div>
                                        </div>
                                        <div className="iconAndTextContainer">
                                            <div className="modelInfoTextContainer">
                                                <p>{data.square} sq. ft.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="moreDetails">
                                        <Link className="moreDetailsButton" href="/">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    
                }
                </div>
            </div>
        </section>
    )
}

export default ModelHomes