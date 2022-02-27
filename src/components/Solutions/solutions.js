import React from 'react'
import Img from './home.jpg'
import './solutions.css'

const solutions = () => {
  return (
   <div className="hero flex items-center justify-between">
            
            <div className="right flex-1">
                <h3>About US</h3>
                <h1>Data Annotation</h1>
                <p>The speed of data annotation, the precision, and alignment with workflow are the primary factors that determine high-performing outcomes of data strategy. Labelify leverages services for enabling cutting-edge software, machine-learning algorithms, and best workflow techniques to enrich, annotation and label large data. While technology helps to increase the output our workforce management teams are able to achieve accuracy thanks to their industry-specific expertise in Computer Vision, NLP and Content Services with Best data annotation company India.</p>
            </div>
            <div className="right flex-1 flex justify-center">
                <img src={Img}></img>
            </div>
        </div>
  )
}

export default solutions