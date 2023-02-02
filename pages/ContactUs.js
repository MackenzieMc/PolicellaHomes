// import "friendly-challenge/widget";

function ContactUs () {
    return (
        <>
            <section className="contactSection">
                <div className="wrapper">
                    <div className="contactTitleContainer">
                        <h2>Let's talk!</h2>
                        <p>We're here to answer any questions you may have.</p>
                    </div>
                    <div className="formAndTextContainer">
                        <div className="contactAndMapContainer">
                            
                        </div>
                        <div className="contactTextContainer">
                            <p>Vince Policella Jr</p>
                            <p>945 South Pelham Road</p>
                            <p>Welland, Ontario</p>

                            <p>905-892-9897</p>
                            <p>vincepolicella@cogeco.ca</p>
                        </div>

                        <div className="formContainer">
                            <form action="">
                                <label htmlFor="Name">Name:</label>
                                <input type="text" id="Name"/>

                                <div className="emailAndPhoneContainer">
                                    <div className="emailContainer">
                                        <label htmlFor="Email">Email:</label>
                                        <input type="email" id="Email"/>
                                    </div>
                                    <div className="phoneContainer">
                                        <label htmlFor="Phone">Phone:</label>
                                        <input type="text" id="Phone"/>
                                    </div>
                                </div>

                                <label htmlFor="Subject">Subject:</label>
                                <input type="text"/>

                                <label htmlFor="message">How can we help you?</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                                <div class="frc-captcha" data-sitekey="<FCMON3HCAL59VK3O>"></div>

                                <input type="submit" value="Submit request" className="buttonSubmit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs 