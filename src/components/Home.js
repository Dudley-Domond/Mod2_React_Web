import React from 'react';
import '../App.css'

const Home = () => {
  return (  
  <>
    <video style={{"size" : "cover", "height" : "100%", "width" : "100%"}} src='videos/pexels-cottonbro-7520860.mp4' autoPlay loop />
    <video style={{"size" : "cover", "height" : "100%", "width" : "100%"}} src='videos/pexels_2.mp4' autoPlay loop  />
    <video style={{"size" : "cover", "height" : "100%", "width" : "100%"}} src='videos/pexels.mp4' autoPlay loop  />
  </>
)
};

export default Home;
