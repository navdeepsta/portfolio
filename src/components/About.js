import React from 'react'

export default function About() {
  return (
    <div className="container-fluid bg-body">
       <div className="row" style={{height:"85vh"}}>
         <div className="col-md-4 about-left">
          <img src="./profile_icon.svg" style={{width:"50%", height:"50%"}} />
         </div>
         <div className="col-md-8 about-right">
          <p><span className="hello-initial">H</span>ello, I'm Navdeep, an aspiring software developer with a passion for creating innovative and user-friendly solutions. I have a strong foundation in programming languages such as Java and JavaScript, and I am continually expanding my skill set through self-learning and exploring new technologies. I enjoy solving complex problems and collaborating with a team to develop efficient and scalable software applications. With a keen eye for detail and a dedication to writing clean and maintainable code, I strive to create impactful software solutions that enhance the user experience. 
            I am excited about the possibilities of technology and eager to contribute to the ever-evolving world of software development.</p>
         </div>
        </div>
    </div>
  )
}
 