// pages/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './pages.css';
import coverImage from "../imgs/cover.jpg";
import FrontPageImage from "./FrontPageImage.png"

const Home = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="hero-image" style={{ backgroundImage: `url(${coverImage})` }}>
        <h1>Welcome to the Bridge Club</h1>
      </div>

      {/* Main Content Section */}
      <div className="container mt-4 pageBodyBed">
        <div className="pageBodyContainer">
          <h1 className="pageHeader">Home</h1>
          <p className='pageBody'>We are UVA's one and only bridge club! Bridge is a game played with 4 players using a standard deck of cards.
            It has lots of strategy involved, which makes it lots of fun! 
          </p>
          <p className='pageBody'>Why join? 1. Bridge is fun 2. Get PAID (See about page for more info). What more can you ask for?</p>

          {/* Bootstrap Card Layout */}
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                {/*<img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" /> */}
                <div className="card-body">
                  <h5 className="card-title">Announcements!</h5>
                  <p className="card-text">(6/16/2024) Multi-school tournament currently being planned! To be hosted at UVA some time in Fall 2024</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                {/*<img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" /> */}
                <div className="card-body">
                  <h5 className="card-title">Meetings</h5>
                  <p className="card-text">Meeting times and location to be decided for Fall 2024</p>
                  <p className="card-text">&nbsp;&nbsp;</p>
                  <p className="card-text"></p>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                {/*<img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" /> */}
                <div className="card-body">
                  <h5 className="card-title">Special Events</h5>
                  <p className="card-text">To be decided for Fall 2024</p>
                  <p className="card-text">&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p className="card-text">&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={FrontPageImage} alt="selfie" className="selfieImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;