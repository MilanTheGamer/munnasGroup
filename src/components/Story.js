import React from 'react';
import "./Story.scss";

import storyImg from "./images/story.png";

const Story = (props) => {
    return (
        <section className="story">
            <div className="storyImg">
                <img src={storyImg}/>
            </div>
            <div className="storyContent">
                <div className="contentBox">
                    <div className="heading">
                        <h3>Our</h3>
                        <h3>Story</h3>
                    </div>
                    <span>
                        Started in the year 2007, by ab Indian Air Force Veteran as a small venture, has now grown to multiple business segments of Supermarket and
                        Distribution of Speciality oils, Raw Materials and Ingredients to Bakery Production Units, Snacks, Feyers, Exports Etc. <br/><br/>
                        Mr.Binu Thankappan Thankappan, an Ex, an Ex-Air Force Veteran had a humble beginning of business Air Force Veteran had a humble beginning of business
                        ventures at Coimbatore, Tamil Nadu. With a zeal to success and get hold on to the
                        business ventures, he has started first Supermarket in Kumbanad area of
                        Pathanamthittadistrict.district
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Story;