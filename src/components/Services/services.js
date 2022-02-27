import React from 'react'
import './service.css'

const services = () => {
  return (
    <section id="services" className="services">
        <div className="container">
            <h1 className="section-heading"><span>Our</span> Services</h1>
            <p>We provide high standar clean website for your business solutions</p>
            <div className="card-wrapper">
                <div className="card">
                    {/* <img src="./images/brush3.svg" alt=""> */}
                    <h2>Graphics Design</h2>
                    <p>There are many variations of passages of but the majority have suffered alteration in some
                        form.</p>
                </div>
                <div className="card">
                    {/* <img src="./images/code1.svg" alt=""> */}
                    <h2>Web Development</h2>
                    <p>Web development refers to the building, creating, and maintaining of websites.It includes aspects such as web design, web publishing, web programming, and database management.</p>
                </div>
                <div className="card">
                    {/* <img src="./images/media1.svg" alt=""> */}
                    <h2>Media Marketing</h2>
                    <p>Social Media Marketing Social media, which relates to the sharing of information, experiences, 
                        and perspectives throughout community-oriented websites, is becoming increasingly significant in our online world.</p>
                </div>
                <div className="card">
                    {/* <img src="./images/web.svg" alt=""> */}
                    <h2>Web Design</h2>
                    <p>Web design is the visual aesthetics and page layout of a website. It goes hand-in-hand with web development in the creation of a static website or dynamic web application. </p>
                </div>
                <div className="card">
                    {/* <img src="./images/media2.svg" alt=""> */}
                    <h2>Motion Graphics</h2>
                    <p>Motion graphics can be used as part of online or television advertisements and commercials. It is used as part of the title and end sequences in television shows and films.</p>
                </div>
                <div className="card">
                    {/* <img src="./images/apps1.svg" alt=""> */}
                    <h2>Apps</h2>
                    <p>Android is used by most of the mobile users and is a trending topic of modern technology.Apps are used for in smartphone as it are easy to access.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default services