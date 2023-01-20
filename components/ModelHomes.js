import Link from "next/link"
import Image from "next/image"
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function ModelHomes(props) {

    const modelHomes = props.objectData

    console.log(modelHomes);
    
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
                {/* {

                        modelHomes.map(data =>
                            <div className="modelHomesPageCard" key={data.id}>
                                <Link href={{
                                    pathname: `/ModelHomes/${data.id}`, query: {
                                        id: data.id
                                    }
                                }}>
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
                                    </div>
                                </Link>
                            </div>
                        )
                } */}
                </div>
            </div>
        </section>
    )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public/data/model_homes_data.json');
    
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    console.log(objectData);

    return {
        props: objectData
    }
}