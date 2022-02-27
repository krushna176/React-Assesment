import React from 'react'
import './about.css'
import Logo from './code.jpg'
function about() {
  return (
    <div id="section" className="grid">
    <div className="sub">
        <img src={Logo}></img>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
    </div>
    <div className="sub">
        <img src={Logo}></img>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
    </div>
    <div className="sub">
        <img src={Logo}></img>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
    </div>
    <div className="sub">
        <img src={Logo}></img>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
    </div>
</div>

  )
}

export default about