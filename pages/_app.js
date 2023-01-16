import '../styles/styles.css'
import Nav from '../components/Nav'
import Footer from '../sections/Footer'

export default function App({ Component, pageProps }) {
  return (

    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  
}
