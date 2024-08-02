import React, { useEffect, useRef } from 'react';
import classes from './WebPage3.module.css';

const WebPage3 = ({ video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && video) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      videoRef.current.play();
    }
  }, [video]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        {video ? (
          <video controls src={video} className={classes.videoInput} ref={videoRef}>
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video selected</p> 
        )}
      </div>
    </div>
  );
};

export default WebPage3;
