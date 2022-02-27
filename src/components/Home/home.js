import React from 'react'
import Img from './home.jpg'
import './home.css'

const home = () => {
  return (
   <div className="hero flex items-center justify-between">
            <div className="left flex-1 flex justify-center">
                <img src={Img}></img>
            </div>
            <div className="right flex-1">
                <h1>Data Labeling<span> Simplified</span></h1>
                <p>At Labelify, we ensure your data is labeled in the shortest time possible with the highest accuracy of quality management. Best data annotation company in India</p>
                {/* <div> */}
                    <button className="btn btn-secondary">READ MORE</button>
                {/* </div> */}
            </div>
        </div>
  )
}

export default home