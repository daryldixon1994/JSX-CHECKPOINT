import React from 'react';
import './style.css'
import imageInSrc from './imageInSrc.png';

function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} className="App">
    <h1 className="title red">Mohamed Anouar Jabri</h1> <br />
    <img src={imageInSrc} alt="srcimg" /> <br/>
    <img src="/imageInPublic.jpg" alt="publicimg" /> <br />
    <video width="320" height="240" controls >
    <source src="/Videos/video1.mp4" type="video/mp4"/>
    </video>
    </div>
    
  );
}

export default App;
