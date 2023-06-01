import Image from 'next/image'
import Head from 'next/head'
import GalleryHeaderImage from '../public/images/galleryHeader.jpg'

function Gallery (props) {

    const galleryPhoto = props.galleryImages

    const basePath = '/galleryImages/'

    console.log(props)

    return (
        <>
            <Head>
                <title>Gallery | Policella Homes</title>
                <meta charset="utf-8" />
                <meta name="description" content="View our photo gallery and some of the properties we have staged!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <header className='headerText galleryHeader'>
                <div className="headerTextContainer">
                    <div className="fontContainer">
                        <h2>Our Gallery</h2>
                        <p>Take a visual tour of our portfolio and see the real-life charm of our projects.</p>
                    </div>
                </div>
                <div className="headerImageContainer">
                    <Image
                        src={GalleryHeaderImage}
                        alt="A kitchen that has been staged"
                        fill
                        loading='eager'
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", filter: "brightness(80%)", position: "absolute" }}
                    />
                </div>
            </header>
            <main>
                <section>
                    <div className="wrapper">
                            <div className="tabsMainContainer">
                                <div className="tabsContainer">
                                    <button className="galleryButton">All</button>
                                    <button className="galleryButton">Exterior</button>
                                    <button className="galleryButton">Interior</button>
                                    <button className="galleryButton">Kitchen</button>
                                    <button className="galleryButton">Bathroom</button>
                                </div>
                            </div>

                        <div className="galleryItemsContainer">
                        {
                            galleryPhoto.map( data => 
                                    <div className="galleryImageContainer">
                                        <Image src={`${basePath}${data.imagePath}`} alt="" fill objectFit="cover" priority />
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



export default Gallery

// Fetching data from the JSON file
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/data/gallery_photos.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);


    return {
        props: objectData
    }
}