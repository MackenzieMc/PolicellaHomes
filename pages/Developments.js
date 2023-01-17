import developmentData from '../public/data/development_data.json'
import Link from 'next/link'

function Developments () {
    return (
        <>
            <header className='headerText developmentHeader'>
                    <h3>Our Developments</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </header>
            <section>
                <div className="wrapper">
                    <div className="developmentsTitleText">
                        <h3>Our Developments</h3>
                    </div>
                    <div className="developmentPageContainer">
                        {
                            Object.values(developmentData).map((data) => {
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
                                            </div>
                                            <div className="developmentLearnMoreContainer">
                                                <Link href="/Developments">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Developments