import ModelHomesData from '../public/data/model_homes_data.json'
import Image from 'next/image'
import Link from 'next/link'

function ModelHomes () {

    const basePath = '/images/'

    return (
        <>
            <header className='modelHomesHeader'>
                <div className="wrapper">
                    <div className="developmentPageTextContainer">
                        <h2>Model Homes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </header>
            <section>
                <div className="wrapper">
                    <div className="modelHomesTitleText">
                        <h2>Model Homes</h2>
                    </div>

                    <div className="modelHomesContainer">
                        {

                            Object.values(ModelHomesData).map((data) => {

                                return (

                                    <div className="modelHomesPageCard">
                                        <div className="modelHomesImgContainer">
                                            <Image src={`${basePath}${data.image}`} alt="" fill objectFit="cover" />
                                        </div>
                                        <div className="modelHomesCardTextContainer">
                                            <div className="modelNameContainer">
                                                <h3>{data.address}</h3>
                                            </div>
                                            <div className="modelInformationBar">
                                                <div className="iconAndTextContainer">
                                                    <div className="iconContainer">

                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.bedroom} Beds</p>
                                                    </div>
                                                </div>
                                                <div className="iconAndTextContainer">
                                                    <div className="iconContainer">

                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.bathroom} Baths</p>
                                                    </div>
                                                </div>
                                                <div className="iconAndTextContainer">
                                                    <div className="iconContainer">

                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.garage} Garage</p>
                                                    </div>
                                                </div>
                                                <div className="iconAndTextContainer">
                                                    <div className="iconContainer">

                                                    </div>
                                                    <div className="modelInfoTextContainer">
                                                        <p>{data.square} sq/ft</p>
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
        </>
    )
}

export default ModelHomes