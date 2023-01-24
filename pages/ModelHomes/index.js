import modelHomes from '../../public/data/model_homes_data.json'
import Image from 'next/image'
import Link from 'next/link'





export default function ModelHomesPage(props) {

    const modelHomes = props.modelHomes


    const basePath = '/images/'

    return (
        <>
            <header className='headerText'>
                        <h2>Model Homes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </header>
            <section>
                <div className="wrapper">
                    <div className="modelHomesTitleText">
                        <h2>Model Homes</h2>
                    </div>

                    <div className="modelHomesContainer">
                        {

                            modelHomes.map( data => 
                                    <div className="modelHomesPageCard" key={data.id}>
                                            <Link href={`/ModelHomes/${data.id}`}>
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
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/data/model_homes_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);


    return {
        props: objectData
    }
}
