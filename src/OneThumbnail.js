import classes from './OneThumbnail.module.css';

const OneThumbnail = ({ item, onClick }) => {
  return (
    <div className={classes.mainContainer} onClick={onClick}>
      <div className={classes.bodyContainer}>
        <div className={classes.textContainer}>
          {item.title} 
        </div>
        <div className={classes.imageContainer}>
          <img className={classes.imageInput} src={item.imageFile.imageUrl} alt="Thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default OneThumbnail;
