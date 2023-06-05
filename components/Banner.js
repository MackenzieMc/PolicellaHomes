import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

function Banner () {

    const [close, setClose] = useState(false)

    const handleClose = () => {
        setClose(true)
    }


    return (
        
        <>
        {
            !close ?
            <div className="bannerContainer">
                <div className="bannerTextContainer">
                    <p>Saffron Meadows, Fonthill - 22 Lots located on Port Robinson & Rice Road</p>
                </div>
                <div className="bannerIconContainer">
                    <button onClick={handleClose}><GrClose /></button>
                </div>
            </div>
            : null
        }
        </> 
    )
}

export default Banner