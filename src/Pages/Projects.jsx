import React from 'react'

function Projects() {
  return (
    <div id='projects' className='Projects'>
      <div className='h2'><h2>My Projects</h2></div>
      <section id='Items'>
        <div id='Item'>
           <img src="Full-Banding.jpg" alt="" />
           <h1>Full Branding</h1>
           <button className='btn-view'> View Project</button>
        </div>


        <div id='Item'>
           <img src="gym.jpg" alt="" />
           <h1>Gym Project</h1>
           <button className='btn-view'> View Project</button>
        </div>

        <div id='Item'>
           <img src="Hospital.png" alt="" />
           <h1>Hospital project</h1>
           <button className='btn-view'> View Project</button>
        </div>

        <div id='Item'>
           <img src="resturent.jpg" alt="" />
           <h1>Resturent project </h1>
           <button className='btn-view'> View Project</button>
        </div>
      </section>
      
    </div>
  )
}

export default Projects