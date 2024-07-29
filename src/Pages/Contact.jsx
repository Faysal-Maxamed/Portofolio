import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='Contact'>
      <div className='container'>
        <div className='Contact1'>
          <h1>Let's Chat</h1>
          <h5>Whether you have a question,want to<br></br>
          start a project or simply want to connect,<br></br><br></br>
          feel free to send me a message in the <br></br>
                     contact form
          </h5>
          <h4>Phone: 0614388477</h4>
          <h4>Email: Pheysal879@gmail.com</h4>
          <h4>Street:Banaadir/Taleh</h4>
          <div className='social-media'>
            <img src="whatsup.jpg" alt="" />
            <img src="facebook.png" alt="" />
            <img src="tiwiter.png" alt="" />
            <img src="instigram.jpg" alt="" />
          </div>
        </div>
        <div className='contact2'>
         <h1>Contact</h1>
         <h6>Required</h6>
         <input type="text"  placeholder='Name'/><br></br>
         <input type="text" placeholder='Company'/><br></br>
         <input type="email" placeholder='Email' /><br></br>
         <input type='number' placeholder='Phone'></input><br></br>
         
         <textarea name=""  placeholder='Write Somthing................'></textarea>
         <button id='submit'>SUBMIT</button>
        </div>
   
       </div>
       
    </div>
  )
}

export default Contact