import React from 'react';
import '../App.css';

const About = () => {
  return (
  <> 
  <div>
  </div>
  <div style={{backgroundColor: "gray", width: "100%", height: "200px"}}>
  </div>
  <video style={{"size" : "cover", "height" : "100%", "width" : "100%"}} src='videos/girlplayingmusic.mp4' autoPlay loop muted />
  <h1 className="about_header" style={{width: "100%", height: "200px"}}>Type A Artist Below </h1>

  </>
)
};

export default About;
