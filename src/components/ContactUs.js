import React from 'react';
import "./ContactUs.scss";

import LocationIcon from "./icons/locationIcon.svg";
import EmailIcon from "./icons/emailIcon.svg";
import CallIcon from "./icons/callIcon.svg";
import FacebookIcon from "./icons/facebookIcon.svg"

const ContactUs = (props) => {

    return (
        <React.Fragment>
            <div className="contactUs">
                <div className="contactBox">
                    <div className="contactDetails">
                        <h3>Contact Us</h3>
                        <div className="contactItem">
                            <img src={EmailIcon} className="img" />
                            <span><a href="mailto:munnasdistributors@gmail.com">munnasdistributors@gmail.com</a></span>
                        </div>
                        <div className="contactItem">
                            <img src={CallIcon} className="img" />
                            <span><a href="tel:9495185132">9495185132</a></span>
                        </div>
                        <div className="contactItem">
                            <img src={FacebookIcon} className="img" />
                            <span>
                                <a href="https://www.facebook.com/binumsm/?hc_ref=ARQ01boZHwYnNd7Y8hc553PDVuenGoHdfzeljPGHj1VTy9zusLliUTI84DaRTeflFVk&fref=nf&__tn__=kC-R">
                                    binumsm</a>
                                    </span>
                        </div>
                        <div className="contactItem">
                            <img src={LocationIcon} className="img" />
                            <div className="address">
                                <a href="https://www.google.com/maps/uv?pb=!1s0x3b063cbca6b991df%3A0xcd86c58c51000735!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPjKcYHJbGeiDUiBPTh5s5q9vhBU68mgwFP_SYC%3Dw284-h160-k-no!5smunnas%20supermarket%20kumbanad%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPjKcYHJbGeiDUiBPTh5s5q9vhBU68mgwFP_SYC&hl=en&sa=X&ved=2ahUKEwiT6Yj0z87rAhWY4nMBHakaDMsQoiowE3oECBMQBg&cshid=1599192666448">
                                    <span>Munnas Supermarket,</span>
                                    <span>Near Cathelic Church Bank, Kumbanad,</span>
                                    <span>Pathanamthitta, Kerala,</span>
                                    <span>PIN:689547</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contactLocation">
                        <div className="map">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactUs;