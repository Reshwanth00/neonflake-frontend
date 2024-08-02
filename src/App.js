import React, { useState, useRef } from 'react';
import UploadPage from './UploadPage';
import WebPage2 from './WebPage2';
import WebPage3 from './WebPage3';
import classes from './App.module.css';

const App = () => {
  const [render, setRender] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const webPage2Ref = useRef(null); 

  return (
    <div className={classes.mainContainer}>
      <UploadPage setRender={setRender} webPage2Ref={webPage2Ref} />
      <div ref={webPage2Ref}>
        <WebPage2 render={render} onThumbnailClick={setSelectedVideo} /> 
      </div>
      <WebPage3 video={selectedVideo} /> 
    </div>
  );
};

export default App;
