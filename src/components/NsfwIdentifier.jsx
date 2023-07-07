import React, {  useState } from "react";
import { Link, json } from "react-router-dom";

const NsfwIdentifier = () =>{

    const [imageUrl, setImageUrl] = useState("")


    // Setting the imageUrl from the input value
    const handleChange = (event) =>{
        setImageUrl(event.target.value)
    }


    // By clicking on 'Submit' button this func will handle 
    const onSubmit = () => {

        //loading image on the screen
        let image = document.getElementById("image");
        image.setAttribute("src", imageUrl)



        // --API call-- //

    const IMAGE_URL = imageUrl;


    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + '2da0ad55eaba47c0a1913fa233f9a2b9'
        },
        body: raw
    };
    
    fetch(`https://api.clarifai.com/v2/models/nsfw-recognition/versions/aa47919c9a8d4d94bfa283121281bcc4/outputs`, requestOptions)
        .then(response => response.json())
        .then(result => nsfwCheck(result.outputs[0].data.concepts))
        .catch(error => console.log('error', error));
    
    }


    
    //Checking whether the image is SFW or NSFW

    const nsfwCheck = (values) =>{

        let name = document.getElementById("name")
        let possibleValue = document.getElementById("value")
        for (let i = 0; i < values.length-1; i++){
            if (values[i].value >= values[i+1].value){
                name.innerHTML = `${values[i].name}`
                possibleValue.innerHTML = `${((values[i].value)*100).toFixed(2)}%`
            } else {
                name.innerHTML = `${values[i].name}`
                possibleValue.innerHTML = `${((values[i].value)*100).toFixed(2)}%`
            }
        }
    }


    

    

    return(
        <section>
            <div className="main-page">
                <nav>
                    <h3><Link to={'/'} className="no-text-decor">Sign Out</Link></h3>
                </nav>
                <div className="title">
                    <h1>Nsfw Identifier</h1>
                </div>
                <div className="image-url">
                    <input type="text" placeholder="Enter Image URL" value={imageUrl} onChange={handleChange}/>
                    <button onClick={onSubmit}>Submit</button>
                </div>
                <div className="output">
                    <div className="image-div">
                        <img src="" alt="image" id="image" />
                    </div>
                    <div className="emotion-outcome">
                        <h2>Outcome</h2>
                        <div className="result">
                            <h3>Result</h3>
                            <p id="name"></p>
                        </div>
                        <div className="result">
                            <h3>Percentage</h3>
                            <p id="value"></p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        
    )
}

export default NsfwIdentifier