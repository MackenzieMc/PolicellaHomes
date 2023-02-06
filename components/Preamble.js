import Link from "next/link"
function Preamble () {
    return (
        <section className="oddBackground">
            <div className="wrapper">
                <div className="preambleTextContainer">
                    <h3>Serving the Niagara region since <span className="preambleText">1984</span></h3>
                    <p>Let us make your dream home a reality</p>
                    <Link href={'/Gallery'}>Check out our work</Link>
                </div>
            </div>
        </section>
    )
}

export default Preamble