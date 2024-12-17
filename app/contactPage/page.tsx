import Button1 from "@/components/button1"

export default function Contact() {
    return (
        <div>
            <div className="container contact">
                <div className="heading">
                    <h1>Book Your Order Now</h1>
                    <hr />
                    <h5>We are available 24/7, 7 days a week.</h5>
                    <h5>Phone: +8801611112222</h5>
                    <h5>Fill out our form</h5>
                    <hr />
                </div>
                <div className="contactForm ">
                    <div>
                        <label htmlFor="/">Enter Your First Name:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label htmlFor="/">Enter Your Last Name:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label htmlFor="/">Enter Your Desire cake:
                        </label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label htmlFor="/">Enter Your Address:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label htmlFor="/">Enter Your Contact Number:</label>
                        <input type="number" required />
                    </div>
                    <Button1 button="Submit" />

                </div>

            </div>
        </div>
    )
}