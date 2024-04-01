import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import PhotoAlbum from "react-photo-album";
import photos from '../public/data/photos.js';
import NextJsImage from '../components/NextJsImage';
import GalleryHeaderImage from '../public/images/GalleryKitchenHead.jpg';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Gallery(props) {
    const [index, setIndex] = useState(-1);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const galleryPhoto = photos;

    const filteredPhotos = galleryPhoto.filter((photo) => {

        console.log(photo);
        if (selectedFilter === 'all') {
            return true;
        } else {
            return photo.alt === selectedFilter;
        }
    });

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

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
                        style={{ objectFit: "cover", zIndex: "10", height: "100%", width: "100%", position: "absolute" }}
                    />
                </div>
            </header>
            <main>
                <section>
                    <div className="wrapper">
                        <div className="buttonWrapper">
                            <div className="tabsContainer">
                                <button className="galleryButton" onClick={() => handleFilterClick('all')}>All</button>
                                <button className="galleryButton" onClick={() => handleFilterClick('exterior')}>Exterior</button>
                                <button className="galleryButton" onClick={() => handleFilterClick('interior')}>Interior</button>
                            </div>
                        </div>
                        <div className="galleryImageContainer">
                            <div className="photoContainer">
                                <PhotoAlbum
                                    photos={filteredPhotos} // Use filteredPhotos here
                                    layout="rows"
                                    columns={3}
                                    renderPhoto={NextJsImage}
                                    defaultContainerWidth={1200}
                                    sizes={{
                                        size: "calc(100vw - 40px)",
                                        sizes: [
                                            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                                            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                                            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
                                        ],
                                    }}
                                    onClick={({ index }) => setIndex(index)}
                                />
                            </div>
                        </div>
                        <Lightbox
                            slides={filteredPhotos} // Use filteredPhotos here
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Gallery;
