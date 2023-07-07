import React from 'react'

export default function Contact() {
  return (
    <div className="container-fluid ">
       <div className="row" style={{height:"83vh"}}>
         <div className="col-md contact">
          <form style={{width:"50%"}}>
            <label className="form-text">Get in touch</label>
            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input type="name" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
         </div>
        </div>
    </div>
  )
}
