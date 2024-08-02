import { useEffect, useState } from 'react';
import OneThumbnail from './OneThumbnail';
import classes from './WebPage2.module.css';
import { getInDb } from './Api';

const WebPage2 = (props) => {
  const [allFolders, setFolders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInDb(); 
        if (Array.isArray(data)) {
          setFolders(data); 
        } else {
          console.error("Received data is not an array:", data);
          setFolders([]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setFolders([]); 
      }
    };
    fetchData();
  }, [props.render]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        {allFolders.length > 0 ? (
          allFolders.map((oneItem, index) => (
            <OneThumbnail 
              key={index}
              item={oneItem}
              onClick={() => props.onThumbnailClick(oneItem.videoFile.videoUrl)} 
            />
          ))
        ) : (
          <p>No items found</p>  
        )}
      </div>
    </div>
  );
};

export default WebPage2;
