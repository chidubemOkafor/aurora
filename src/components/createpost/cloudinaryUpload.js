import axios from "axios";

export const UploadImageCloudinary = async (formDataProp) => {
  const response = await axios.post(
    "http://localhost:8090/api/v1/imageUpload",
    formDataProp,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.imageUrl;
};
