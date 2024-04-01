import { modelData } from '../../public/data/model_homes_data.json'
import Link from 'next/link';
import fsPromises from 'fs/promises'
import path from 'path'
import Image from 'next/image';
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';
import Head from 'next/head';

export const getStaticPaths = async () => {
    
    const filePath = path.join(process.cwd(), '/public/data/model_homes_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    
    const modelHouse = objectData.modelHomes
    
    const paths = modelHouse.map( data => {
        return {
            params: { ModelHomeID: data.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

function ModelHomeDetail ({ ModelHome }) {
    const basePath = '/images/'
    return (

        <>
        {
            ModelHome.map( data => 
                <Head>
                    <title>{data.address} | Policella Homes</title>
                    <meta charset="utf-8" />
                    <meta name="description" content={`Check out our custom built model Home, ${data.address}!`} />
                    <meta name="viewport" content="width=device-width" />
                </Head>
                
                )
        }
            <main className='modelHomeMain'>
                <section className='breadSection'>
                    <div className="wrapper">
                        <Breadcrumbs containerClassName='breadContainer' listClassName='breadList' rootLabel="Home" />
                    </div>
                </section>
                <section className='modelHomeSection'>
                    <div className="wrapper">
                        <div className="modelHomeContainer">
                            {
                                ModelHome.map( data =>
                                    <>
                                    <div className="modelHomeNameAndFeaturesContainer">
                                        <div className="modelNameTextContainer">
                                            <h2>{data.address}</h2>
                                            <p>{data.description}</p>
                                        </div>
                                        <div className="featuresListAndLocationContainer">
                                            <div className="featuresList">
                                                <h3>Features</h3>
                                                <ul>
                                                    <li>
                                                        {data.square} sq/ft
                                                    </li>
                                                    <li>
                                                        {data.bedroom} bedrooms
                                                    </li>
                                                    <li>
                                                        {data.bathroom} bathrooms
                                                    </li>
                                                    <li>{data.garage} garage</li>
                                                </ul>
                                            </div>
                                            <div className="locationContainer">
                                                <h3>Location</h3>
                                                <p>{data.address}</p>
                                                <p className='cityLocation'>{data.city}</p>
                                            </div>
                                        </div>
                                        
                                            <div className="contactTextContainer">
                                                <Link href="/ContactUs">Book a Viewing / General Inquiry</Link>
                                            </div>
                                    </div>                    
                                    <div className="modelHomeImageContainer">
                                        <Image src={`${basePath}${data.image}`} alt="" fill priority/>
                                    </div>
                                    </> 
                                )
                            }

                        </div>
                    </div>
                </section>
            </main>

        </>
        
    )
}

export default ModelHomeDetail

export async function getStaticProps(context) {

    const id = await context.params.ModelHomeID

    const filePath = path.join(process.cwd(), '/public/data/model_homes_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData =  JSON.parse(jsonData);

    let modelHomesData = objectData.modelHomes

    const modelHouses = modelHomesData.filter(p => p.id.toString() === id )

    return {
        props: {
            ModelHome: modelHouses
        }
    }
}