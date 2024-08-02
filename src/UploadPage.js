import { useState, useRef, useEffect } from 'react';
import classes from './UploadPage.module.css';
import { postInDb } from './Api';

const UploadPage = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setUpload] = useState("not uploaded");

  const imageFileRef = useRef(null);
  const videoFileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpload("uploading");
    const formData = {
      title: title,
      description: description,
      imageFile: imageFileRef.current.files[0],
      videoFile: videoFileRef.current.files[0]
    };
    await postInDb({ formData, setRerender: props.setRender, setUpload });
    setTitle("");
    setDescription("");
    imageFileRef.current.value = null;
    videoFileRef.current.value = null;
    props.webPage2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.inputTextContainer}>
          Neon Flake
        </div>
        <input
          type="text"
          placeholder="Title"
          maxLength="50"
          value={title}
          required
          className={classes.inputField}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          maxLength="200"
          value={description}
          required
          className={classes.textareaField}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/jpeg,image/png"
          required
          className={classes.imageInput}
          ref={imageFileRef}
        />
        <input
          type="file"
          accept="video/mpg,video/avi,video/mp4"
          required
          className={classes.videoInput}
          ref={videoFileRef}
        />
        {
          upload === "not uploaded" &&
          <button className={classes.buttonInput} onClick={handleSubmit}>
            Upload
          </button>
        }
        {
          upload === "uploading" &&
          <button className={classes.buttonInput}>
            Uploading
          </button>
        }
      </div>
    </div>
  );
};

export default UploadPage;
