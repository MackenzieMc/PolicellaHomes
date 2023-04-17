import Image from "next/image"
import Head from "next/head"
import aboutOne from '../public/images/aboutOne.jpg'
import aboutQuality from '../public/images/AboutQuality.jpg'

function AboutUs () {

    return (
        <>
            <Head>
                <title>About Us | Policella Homes</title>
                <meta charset="utf-8" />
                <meta name="description" content="Learn more about who we are here at Policella Homes!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <header className="aboutUsHeader brightnessImage">
                <div className="wrapper">
                    <div className="headerText">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </header>
            <section>
                <div className="wrapper">
                    <div className="aboutSectionsContainer">
                        <div className="ourStoryContainer">
                            <div className="ourStoryTextContainer">
                                <h3>Our Story</h3>
                                <p>Vince Policella Sr. was born in a small village in Italy and was trained as a skilled mason.  Shortly after immigrating to Canada in 1964, he began a family and started his own business. In 1984, after 15 successful years in masonry, Vince Sr. followed his dream and the business evolved into Policella Homes.  In 2001, Vince’s son completed an Honours Business degree from Brock University, joined the family business and a successful partnership was created. Vince Sr. and Vince Jr. have the ability to combine the old-world traditions of quality craftmanship and passion for excellence with new modern designs and stylish finishes.</p>
                            </div>
                            <div className="ourStoryImgContainer">
                                <Image src={aboutOne} fill contain="true" alt="Test" sizes='100vw' />
                            </div>
                        </div>
                        <div className="qualityContainer">
                            <div className="qualityTextContainer">
                                <h3>Quality Craftsmanship</h3>
                                <p>Policella Homes has the reputation of being an honest and quality custom builder.  With over 400 homes built, we understand that every family has individual needs in a home which is why we work with each client to custom design a layout that will meet the personal needs of the home-buyer.  You, as the home-buyer, will be involved with every step of the process to ensure the custom kitchen design, electrical layout and overall design meets the practical needs of your family. We understand the importance of delivering a home on time and within budget.  With hundreds of flooring, lighting and paint options within our standard budget, the finished product will truly reflect your personal style.</p>
                            </div>
                            <div className="qualityImgContainer">
                                <Image src={aboutQuality} fill contain="true" alt="Test" sizes='100vw' />
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs 