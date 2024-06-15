// pages/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './pages.css';
import coverImage from "../imgs/cover.jpg";

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
          <p>Bridge club!!!!!</p>

          {/* Bootstrap Card Layout */}
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Announcements!</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 2</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;