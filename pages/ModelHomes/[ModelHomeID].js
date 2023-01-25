import { modelData } from '../../public/data/model_homes_data.json'
import fsPromises from 'fs/promises';
import path from 'path';

export const getStaticPaths = async () => {

    const filePath = path.join(process.cwd(), '/public/data/model_homes_data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    const modelHouse = objectData.modelHomes

    console.log(modelHouse);


    const paths = modelHouse.map( data => {
        return {
            params: { id: data.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}
function ModelHomeDetail () {
    
    return (
        <section>
            <div className="wrapper">
                <div className="modelNameTextContainer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </section>
    )
}

export default ModelHomeDetail
