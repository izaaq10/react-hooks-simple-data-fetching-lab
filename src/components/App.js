// create your App component here
import React, {useState, useEffect} from 'react'

const App = () => {
const [image, setImage]= useState(null)
const [viewNext, setViewNext] = useState(null)

const API= "https://dog.ceo/api/breeds/image/random"
useEffect(()=>{
    
 fetch (API)
.then((response)=>response.json())
.then((data)=> 
setImage(data.message))
    }
,[viewNext])


  return (
    <div className='ui container'>
    <div className="ui card padded">
        <h4 className='ui header'>Here is an Image of a lovely Dog</h4>
        {image?<img src={image} alt="A Random Dog"/>: <p>Loading...</p>}
        <br></br>
        <button onClick={()=>setViewNext(!viewNext)} className='ui button primary'>View Another</button>
    </div>
    </div>
  )
}

export default App