import Link from "next/link"
import developmentData from '../public/data/development_data.json';
import { AiOutlineArrowRight } from 'react-icons/ai'

function Developments () {
    return (
        <section>
            <div className="wrapper">
                <div className="sectionTitleTextContainer">
                    <h2>Our Developments</h2>
                    <div className="subTextContainer">
                        <div className="findContainer">
                            <p>Check out our recent developments!</p>
                        </div>
                        <div className="seeMoreContainer">
                            <Link href="/Developments">View a complete list of developments <span className="modelDevelopmentLink"><AiOutlineArrowRight /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="developmentsCardsContainer">
                    {
                        Object.values(developmentData).splice(0, 4).map( (data) => {
                            return (
                                <div className="developmentCard">
                                    <div className="developmentImgContainer">
                                        <div className="sceneryPictureContainer">

                                        </div>
                                        <div className="mapPictureContainer">

                                        </div>
                                    </div>
                                    <div className="developmentTextContainer">
                                        <div className="developmentTitleTextContainer">
                                            <h3>{data.name}</h3>
                                        </div>
                                        <div className="developmentLocationTextContainer">
                                            <p>{data.location}</p>
                                            <div className="developmentLearnMoreContainer">
                                                <Link href="/Developments">Learn More</Link>
                                            </div>
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

export default Developments