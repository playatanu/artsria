import axios from "axios"

const uploadImage  = async(file) => {

	const formData = new FormData();
		 
    formData.append("file", file);
    try {
      const response = await axios({
        method: "post",
        url: "https://image-server.playatanu.repl.co/upload/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

			return response.data.image;
    } catch(error) {
      console.log(error)

			return error.message;
			
    }
}

export {uploadImage};