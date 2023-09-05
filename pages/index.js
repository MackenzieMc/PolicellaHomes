import Head from 'next/head'
import Hero from '../components/Hero'
import Preamble from '../components/Preamble'
import ModelHomes from '../components/ModelHomes'
import Developments from '../components/Developments'
import About from '../components/About'
import homes from '../public/data/model_homes_data.json'
import Banner from '../components/Banner'


export default function Home(props) {
  
  const homes = props.objectData.modelHomes
  const development = props.objectDataTwo.developments

  return (
    <>
      <Head>
        <title>Policella Homes</title>
        <meta name="description" content="Niagara's premier boutique home builder, serving Niagara since 1984." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Hero />
      <main>
        <Preamble />
        <ModelHomes {...homes}/>
        <Developments {...development}/>
        <About />
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

  const filePathTwo = path.join(process.cwd(), '/public/data/development_data.json');
  const jsonDataTwo = await fsPromises.readFile(filePathTwo);
  const objectDataTwo = JSON.parse(jsonDataTwo);

  return {
    props: { objectData, objectDataTwo }
  }
}
