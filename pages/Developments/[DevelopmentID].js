import Link from 'next/link';
import fsPromises from 'fs/promises'
import path from 'path'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';
import Head from 'next/head';
import Map from '../../components/GoogleMap'
import { useMemo } from 'react';
import { GoogleMap, GroundOverlay, useLoadScript } from '@react-google-maps/api';

export const getStaticPaths = async () => {

    const filePath = path.join(process.cwd(), '/public/data/development_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    const developmentData = objectData.developments

    const paths = developmentData.map(data => {
        return {
            params: { DevelopmentID: data.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

function DevelopmentDetail({ DevelopmentsData }) {

    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: 'AIzaSyDeU74dpqR3GvijtMv1wbfJolyn_mHiE38',
        })

        if(!isLoaded) return <div>Loading..</div>;

        const basePath = '/images/'

        // Defining bounds for image overlay
        const bounds = {
            north: DevelopmentsData[0].north,
            south: DevelopmentsData[0].south,
            east: DevelopmentsData[0].east,
            west: DevelopmentsData[0].west
        }

    return (
        <>
        {
            DevelopmentsData.map( data =>      
            <>
                <Head>
                    <title>{data.name} | Policella Homes</title>
                    <meta charset="utf-8" />
                    <meta name="description" content={`Check out our development, ${data.name}!`}/>
                    <meta name="viewport" content="width=device-width" />
                </Head>
                <main className='developmentMain'>
                    <section className='breadSection'>
                        <div className="wrapper">
                            <Breadcrumbs containerClassName='breadContainer' listClassName='breadList' rootLabel="Home" />
                        </div>
                    </section>
                    <section>
                        <div className="wrapper">
                            <div className="IDContentContainer">
                                <div className="IDInfoContainer">
                                    <div className="IDTextContainer">
                                        <h2>{data.name}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="IDFeaturesContainer">

                                    </div>
                                </div>
                                <div className="IDMapContainer">
                                    <GoogleMap 
                                        zoom={17}
                                        center={{lat: data.lat, lng: data.long}}
                                        mapContainerClassName="mapContainer" 
                                        mapTypeId='hybrid'>
                                            <GroundOverlay 
                                            url={`${basePath}${data.imageMap}`}
                                            bounds={bounds}
                                            
                                            />

                                    </GoogleMap>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
            )
        }
    </>
    )
}

export default DevelopmentDetail

export async function getStaticProps(context) {

    const id = await context.params.DevelopmentID

    const filePath = path.join(process.cwd(), '/public/data/development_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    let developmentData = objectData.developments

    const development = developmentData.filter(p => p.id.toString() === id)

    return {
        props: {
            DevelopmentsData: development
        }
    }
}

