import { useState } from "react";

function App() {
  //This is the url of the api for my account in cloudinary
  const url = "https://api.cloudinary.com/v1_1/alexisparave/image/upload";
  const [imageSelected, setImageSelect] = useState("")

  function handleChange(e){
    setImageSelect(e.target.files[0])
  }

  function handlesubmit(e){
    e.preventDefault()
    // A form data is created because this type of structure is send in  a post request to upload and image in cloudinary 
    const formData = new FormData();
    formData.append("file", imageSelected)
    // This are my credentials we need to search a way to encrypt or use a environment variable
    formData.append("upload_preset", "ywcdj6mz")

    // Post request to upload an image in cloudinary
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then((res)=> res.json())
    .then((image_data)=> console.log(image_data))
    .then(console.log("uploaded"))

    // From image_data we need image_data.secure_url to add to our company model so we need to add another field to our company model for image_url
  }
  
  return (
    <>
      <h1>Tets cloudinary</h1>
      <form onSubmit={handlesubmit}>
        <input 
          type ="file" 
          name="image" 
          onChange={handleChange}
        />
        <br/>
        <button type = "submit" >Upload</button><br/>
      </form>
    </>
  );
}

export default App;
