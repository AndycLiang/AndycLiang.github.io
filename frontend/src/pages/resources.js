// pages/Resources.js

import React from 'react';
import './pages.css';

const Resources = () => {
  return (
    <div>
      <div className = 'pageBodyBed'>
        <div className = 'pageBodyContainer'>
          <h1 className='pageHeader'>Bridge Resources</h1>
          <p className='pageBody'>Bridge can be a bit of a tough game to learn since there are a lot of strategies involved. If you are looking 
            to learn, come out to our meetings and we'll teach you and have some fun! The American Contract Bridge League (ACBL) is also a great
            place to start as it is the primary orgnization for bridge in the U.S. (<a href="https://www.acbl.org/learn/">https://www.acbl.org/learn/</a>)
          </p>
          <p className='pageBody'>Besides playing bridge at our club, the primary way to play bridge online is the Bridge Base Online 
            (<a href="https://www.bridgebase.com/">https://www.bridgebase.com/</a>). It's easy to make an account and start playing right away.
          </p>
          <p className='pageBody'>To see a good introduction to bridge in just 5 minutes, see this video 
            (<a href="https://www.youtube.com/watch?v=Arq3t0iHfPE">https://www.youtube.com/watch?v=Arq3t0iHfPE</a>)</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;