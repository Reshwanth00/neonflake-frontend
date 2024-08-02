import axios from 'axios';

const hosting = "https://render-express-iqei.onrender.com";

export const postInDb = async ({ formData, setRerender, setUpload }) => {
  const passKey = "Neonflake";
  const cloud = "CloudinaryReshwanth";

  const videoUpload = new FormData();
  videoUpload.append("upload_preset", passKey);
  if (formData.videoFile) {
    videoUpload.append("file", formData.videoFile);
  } else {
    console.error("videoFile is missing in formData");
    return;
  }

  const imageUpload = new FormData();
  imageUpload.append("upload_preset", passKey);
  if (formData.imageFile) {
    imageUpload.append("file", formData.imageFile);
  } else {
    console.error("imageFile is missing in formData");
    return;
  }

  try {
    const videoResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud}/video/upload`, videoUpload);
    console.log("Video upload success:", videoResponse.data);

    const imageResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, imageUpload);
    console.log("Image upload success:", imageResponse.data);

    const postData = {
      title: formData.title,
      description: formData.description,
      imageFile: {
        imageName: imageResponse.data.original_filename,
        imageUrl: imageResponse.data.secure_url
      },
      videoFile: {
        videoName: videoResponse.data.original_filename,
        videoUrl: videoResponse.data.secure_url
      }
    };

    const dbResponse = await axios.post(`${hosting}/api/post`, postData);
    setRerender(render => !render);
    setUpload("not uploaded");
    console.log("Data posted to DB:", dbResponse.data);
  } catch (error) {
    console.error("Error during processing:", error);
  }
};

export const getInDb = async () => {
  try {
    const response = await axios.get(`${hosting}/api/get`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(error.message);
  }
};
