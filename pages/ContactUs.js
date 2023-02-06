// import "friendly-challenge/widget";

function ContactUs () {
    return (
        <>
            <header className='headerText contactHeaderBackground'>
                <h2>General Inquiries</h2>
                <p>Ask a question or leave feedback.</p>
            </header>
            <section className="contactSection">
                <div className="wrapper">
                    <div className="contactTitleContainer">
                        <p>Complete the form below and we will be in touch in a timely manner. Alternatively, contact me personally at vincepolicella@cogeco.ca</p>
                    </div>
                    <div className="formAndTextContainer">
                        <div className="formContainer">
                            <form action="">
                                <h3>Contact Information</h3>
                                <div className="nameContainer">
                                    <div className="firstNameContainer">
                                        <label htmlFor="Name">First Name</label>
                                        <input type="text" id="firstName"/>
                                    </div>
                                    <div className="lastNameContainer">
                                        <label htmlFor="Name">Last Name</label>
                                        <input type="text" id="lastName" />
                                    </div>
                                </div>

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

                                <h3>Reason for Contact</h3>

                                <label htmlFor="Subject">How can we help you?</label>
                                <input type="text" className="subjectInput"/>

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                                <div class="frc-captcha" data-sitekey="<FCMON3HCAL59VK3O>"></div>

                                <input type="submit" value="Submit" className="buttonSubmit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs 