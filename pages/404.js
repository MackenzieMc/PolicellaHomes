import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Policella Homes</title>
                <meta charset="utf-8" />
                <meta name="description" content="Oops! It seems the page you are looking for cannot be found!" />
                <meta name="viewport" content="width=device-width" />
            </Head>
            <main>
                <section>
                    <div className="errorContainer">
                        <div className="errorPageTextContainer">
                            <h3>404</h3>
                            <p>Oops, we're sorry! It appears this page does not exist within our system.</p>
                            <Link href='/'>Return Home</Link>
                        </div>
                    </div>
                </section>
            </main>
        
        </>
    )
} 