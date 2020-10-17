import React from 'react';
import "./App.scss"

import './components/Navbar';
import Navbar from './components/Navbar';
import HomeScreen from "./components/HomeScreen";
import Card from "./components/Card";
import Article from "./components/Article";

import storyImg from "./components/images/story.png";
import supermarketImg from "./components/images/supermarket.png";
import distributionsImg from "./components/images/distributions.png"
import restaurantImg from "./components/images/restaurant.png";
import supermarketMain from "./components/images/supermarketMain.png"


function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeScreen />

      <section className="content">

        <section className="story">
          <div className="storyImg">
              <img src={storyImg}/>
          </div>
          <div className="storyContent">
            <div>
              <h3>OUR STORY</h3>
              <p>Mr.BinuThankappanThankappan, an Ex, an Ex-Air Force Veteran had a humble beginning of business Air Force Veteran had a humble beginning of business
                  ventures at Coimbatore, Tamil Nadu. With a zeal to success and get hold on to the
                  business ventures, he has started first Supermarket in Kumbanad area of
                  Pathanamthittadistrict.district
              </p>
            </div>
          </div>
        </section>

        <section className="category">
          <Card image={supermarketImg}
          heading="SUPERMARKET"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Card image={distributionsImg}
          heading="DISTRIBUTIONS"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Card image={restaurantImg}
          heading="RESTRAUNT"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </section>

        <section className="ventures">
          <Article image={supermarketMain}
          heading="Munnas Supermarket"
          contents="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          imgPosition="LEFT"
          />

          <Article image={supermarketMain}
          heading="Munnas Restaurant"
          contents="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          imgPosition="RIGHT"
          />

          <Article image={supermarketMain}
          heading="Munnas Trading Corporation"
          contents="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          imgPosition="LEFT"
          />

        </section>

        


      </section>

    </div>
  );
}

export default App;
