import React from 'react';
const About = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>About bNotebook</h1>
       <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h2>I am the world's largest bNotebook</h2>
                <p>In this bNotebook multiple user can intract simultaneously through this app.
                In this user can store your personal notes and keep it safe as long as you want.
                At first you make your account once and then you can easily take profit of this to put your notes safe. 
                 In this user can easily add, delete and modify our notes very easily. 
                 By help of this  user can trasport our note any where he wants to go and use them easily.
                </p>
                <a href="https://en.wikipedia.org/wiki/Notebook_(2019_film)" target="_blank"class="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div class="about-col">
                <img src="./Images/about2.jpg" alt="image" style={{height: '400px',marginLeft: '50px',borderRadius: '10px'}}/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About