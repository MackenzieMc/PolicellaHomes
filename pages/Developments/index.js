import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from 'nextjs-breadcrumbs2';
import Head from 'next/head';
import DevelopmentHeaderCover from '../../public/images/DevelopmentHeaderPhoto.jpg'


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
                <div className="headerTextContainer">
                    <div className="fontContainer">
                        <h2>Our Developments</h2>
                        <p>Explore our portfolio of thoughtfully designed neighborhoods, each offering a unique sense of belonging.</p>
                    </div>
                </div>
                <div className="headerImageContainer">
                    <Image
                        src={DevelopmentHeaderCover}
                        fill
                        loading='eager'
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", filter: "brightness(80%)", position: "absolute" }}
                        alt='a row of homes'
                    />
                </div>
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
                                                    <Image src={`${basePath}${data.imageOne}`} alt={data.imageAlt} fill/>
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