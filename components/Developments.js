import Link from "next/link"
import Image from "next/image";
import developmentData from '../public/data/development_data.json';
import { AiOutlineArrowRight } from 'react-icons/ai'

function Developments (props) {

    const basePath = '/images/'

    const developments = props

    console.log(props);

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
                        Object.values(developments).splice(0, 3).map( (data) => {
                            return (
                                <div className="developmentCard" key={data.id}>
                                    <Link href={`/Developments`}>
                                        <div className="developmentImgContainer">
                                            <div className="sceneryPictureContainer">
                                                <Image src={`${basePath}${data.imageOne}`} alt="" fill objectFit="cover" priority/>
                                            </div>
                                        </div>
                                        <div className="developmentTextContainer">
                                            <div className="developmentTitleTextContainer">
                                                <h3>{data.name}</h3>
                                            </div>
                                            <div className="developmentLocationTextContainer">
                                                <p>{data.location}</p>
                                            </div>
                                        </div>
                                    </Link>
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