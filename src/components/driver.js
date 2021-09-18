import { useState } from "react";
// Import Amplify and Storage
import Amplify, { Storage } from 'aws-amplify';

Storage.configure({
    region: "us-east-1",
    bucket: "trishanthbucket133411-dev",
    identityPoolId: "us-east-1_q4NneTKIF",
    level: "protected",
});

const Driver=() => {

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = async (e) => {
    const file = e.target.files[0];
    const nameFile = Math.floor((Math.random() * 100) + 1);
    
    try {
      setLoading(true);
      // Upload the file to s3 with private access level. 
      await Storage.put(nameFile, file, {
        level: 'private',
        contentType: 'image/jpg'
      });
      // Retrieve the uploaded file to display
      const url = await Storage.get(nameFile, { level: 'private' })
      setImageUrl(url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }


return (
<div>
<h2>Welcome Driver, Get Started by uploading your ID below.</h2>


      {loading ? <h3>Uploading...</h3> : <input
        type="file" accept='image/jpg'
        onChange={(evt) => handleChange(evt)}
      />}
      <div>
          <br /> ID Uploaded: <br />
        {imageUrl ? <img style={{ width: "30rem" }} src={imageUrl} /> : <span />}
      </div>
</div>
)

};

export default Driver;