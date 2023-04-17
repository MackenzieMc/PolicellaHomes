import Link from 'next/link';
import fsPromises from 'fs/promises'
import path from 'path'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

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

function DevelopmentDetail() {
    return (
        <main>
            <section className='breadSection'>
                <div className="wrapper">
                    <Breadcrumbs containerClassName='breadContainer' listClassName='breadList' rootLabel="Home" />
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolores quibusdam explicabo aspernatur qui numquam rerum nesciunt porro similique consequatur nisi voluptatum vitae sint laboriosam, tempore odit hic commodi sunt!</p>
                </div>
            </section>
        </main>
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
