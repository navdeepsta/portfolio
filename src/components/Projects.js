import React from 'react'

export default function Projects() {
  const projects = [
    {
      projectName : "Musicist", 
      description: "The app lets you connect with your spotify account and allows you to search for songs, create and save playlist to your account.", 
      technology: "HTML, CSS, JavaScript, React JS, Bootstrap, Github",
      url: "https://navdeepsta.github.io/musicist/",
      src: "./portfolio/musicist.png" 
    
    },
    {
      projectName : "Loan Repayment", 
      description: "You can calculate fortnightly, monthy and yearly house loan repayments with this simple and intuitive app.", 
      technology: "HTML, CSS, JavaScript, React JS, Bootstrap, Github",
      url: "https://navdeepsta.github.io/loan-repayment/",
      src: "./portfolio/loanRepayment.png"
    },
    {
      projectName : "Task Planner", 
      description: "This highly responsive and interative app allows a user to create and track the progress of tasks.", 
      technology: "HTML, CSS, JavaScript, Bootstrap, Github",
      url: "https://navdeepsta.github.io/TaskPlanner/",
      src: "./portfolio/taskPlanner.png"
    }
  ]

  return (
    <div className="container-fluid bg-body">
        <div className="row " style={{height:"85vh"}}>
      {projects.map((project)=>{
       return <>
          <div className="col-md-4 project">  
            <div className="card" style={{width: "18rem"}}>
             <img src={project.src} className="card-img-top border-bottom" alt="..." style={{width:"100%", height:120}}/>
             <div className="card-body">
               <h5 className="card-title">{project.projectName}</h5>
               <p className="card-text">{project.description}</p>
             </div>
             <ul className="list-group list-group-flush">
               <li className="list-group-item small text-center bg-light fw-bold">Technologies</li>
               <li className="list-group-item small text-center">{project.technology}</li>
             </ul>
             <div className="card-body">
               <a href={project.url} className="card-link" target="_blank">{project.projectName}</a>
             </div>
           </div>
          </div>
          </>
        })}
       </div>
     </div>
  
  )
}
