import developments from '../../public/data/development_data.json'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from 'nextjs-breadcrumbs2';
import Head from 'next/head';


function Developments (props) {

    const developments = props.developments

    const basePath = '/images/'

    return (
        <>
            <Head>
                <title>Developments | Policella Homes</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Check out our completed and in progress developments!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <header className='headerText developmentHeader'>
                    <h2>Our Developments</h2>
            </header>
            <section className='breadSection'>
                <div className="wrapper">
                    <Breadcrumbs containerClassName='breadContainer' listClassName='modelBreadList' rootLabel="Home" />
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <div className="developmentPageContainer">
                        {
                            developments.map( data => {
                                return (
                                    <div className="developmentCard">
                                        <Link href={`/Developments/${data.id}`}>
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
        </>
    )
}

export default Developments

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/data/development_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);


    return {
        props: objectData
    }
}