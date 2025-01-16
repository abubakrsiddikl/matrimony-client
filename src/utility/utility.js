import axios from "axios";



// imageUpload to image bb
export const imageUpload = async (imageData) => {
  console.log(import.meta.env.VITE_IMAGE_API_KEY);
  const formData = new FormData();
  formData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
    formData
  );
  return data?.data?.display_url;
};


