import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';
import Head from 'next/head';
import ModelHomeCover from '../../public/images/ModelHomeCover.jpg'

export default function ModelHomesPage(props) {
    
    const modelHomes = props.modelHomes
    const basePath = '/images/'

    return (
        <>
            <Head>
                <title>Model Homes | Policella Homes</title>
                <meta charset="utf-8" />
                <meta name="description" content="Check out our completed and in progress Model Homes!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <header className='headerText modelHomesBackground'>
                <div className="headerTextContainer">
                    <div className="fontContainer">
                        <h2>Model Homes</h2>
                        <p>Get a glimpse of our craftsmanship, where affordability meets quality and style.</p>
                    </div>
                </div>
                <div className="headerImageContainer">
                    <Image
                        src={ModelHomeCover}
                        alt="Model home"
                        fill
                        loading='eager'
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", filter: "brightness(80%)", position: "absolute" }}
                    />
                </div>
            </header>
            <main>
                <section className='breadSection'>
                    <div className="wrapper">
                        <Breadcrumbs containerClassName='breadContainer' listClassName='modelBreadList' rootLabel="Home" />
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <div className="modelHomesPageContainer">
                            {
                                modelHomes.map( data => 
                                        <div className="modelHomesPageCard" key={data.id}>
                                                <Link href={`/Model-Homes/${data.id}`}>
                                                <div className="modelHomesImgContainer">
                                                    <Image src={`${basePath}${data.image}`} 
                                                    alt="" 
                                                    fill  
                                                    priority/>
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
                                                    {/* <div className="modelInformationBar">
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
                                                    </div> */}
                                                </div>
                                                </Link>
                                            </div>
                                    )
                            }
                        </div>
                    </div>
                </section>
            </main>
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
