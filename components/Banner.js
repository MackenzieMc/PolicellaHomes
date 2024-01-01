import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';

function Banner() {
    const [close, setClose] = useState(false);
    const [messages, setMessages] = useState([
        "Saffron Meadows, Fonthill - 22 Lots located on Port Robinson & Rice Road",
        "Murdoch Estates, Welland - 64 Units singles/towns located on Weber & Murdoch Road",
        // Add more messages as needed
    ]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const handleClose = () => {
        setClose(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Display the next message in the list
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // Change the interval (in milliseconds) as needed

        return () => clearInterval(interval);
    }, [messages]);

    return (
        <>
            {!close ? (
                <div className="bannerContainer">
                    <div className="bannerTextContainer">
                        <p>{messages[currentMessageIndex]}</p>
                    </div>
                    <div className="bannerIconContainer">
                        <button onClick={handleClose}>
                            <GrClose />
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Banner;
