function ContactUs () {
    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="headerText">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </header>
            <section>
                <div className="wrapper">
                    <div className="contactUsTitleTextContainer">
                        <h3>Lorem ipsum dolor sit.</h3>
                    </div>

                    <div className="formContainer">
                        <form action="">
                            <label htmlFor="Name"></label>
                            <input type="text" placeholder="Name" id="Name"/>

                            <div className="emailAndPhoneContainer">
                                <div className="emailContainer">
                                    <label htmlFor="Email"></label>
                                    <input type="email"  placeholder="Email Address" id="Email"/>
                                </div>
                                <div className="phoneContainer">
                                    <label htmlFor="Phone"></label>
                                    <input type="text"  placeholder="Phone Number" id="Phone"/>
                                </div>
                            </div>

                            <label htmlFor="Subject"></label>
                            <input type="text" id="Subject" placeholder="Subject"/>

                            <label htmlFor="message"></label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="What can we do for you?"></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs 