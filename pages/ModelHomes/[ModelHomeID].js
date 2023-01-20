import { useRouter } from 'next/router';




// export const getStaticProps = async ({params}) => {


//     const ModelData = model_homes_data.filter(data => data.id.toString === params.id)
//     return {
//         props: {
//             modelHouse : ModelData[0], 
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const paths = model_homes_data?.map(data => ({
//         params: { id: data.id.toString() },
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }
function ModelHomeDetail () {

    const router = useRouter();
    console.log(router);
    const { id } = router.query

    console.log(id);
    
    return (
        <section>
            <div className="wrapper">
                <div className="modelNameTextContainer">
                    <h3>{}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </section>
    )
}

export default ModelHomeDetail