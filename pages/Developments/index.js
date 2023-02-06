import developments from '../../public/data/development_data.json'
import Link from 'next/link'
import Image from 'next/image'

function Developments (props) {

    const developments = props.developments

    const basePath = '/images/'

    return (
        <>
            <header className='headerText developmentHeader'>
                    <h2>Our Developments</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </header>
            <section>
                <div className="wrapper">
                    <div className="developmentsTitleText">
                        <h3>Our Developments</h3>
                    </div>
                    <div className="developmentPageContainer">
                        {
                            developments.map( data => {
                                return (
                                    <div className="developmentCard">
                                        <div className="developmentImgContainer">
                                            <div className="sceneryPictureContainer">
                                                <Image src={`${basePath}${data.imageOne}`} alt="" fill objectFit="cover" />
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