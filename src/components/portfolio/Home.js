import React from 'react'
import Slider from '../inc/Slider'
function Home () {
  return (
    <>
      <Slider />
      <div className='container'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h2 className='head'>Welcome to the Portfolio of Anand Maharaj,</h2>
            <h2 className='head'> In the growing World of Tech.</h2>
          </div>
        </div>
      </div>
      <div className='my-statement'>
        <p>
          <h4>
          I am a people’s person, a leader, I am a problem solver, a team
          player,
          </h4>
          <h4> I am building the future, I am a software engineer.</h4>
        </p>

        <p>
          <h5>Forever living by the quote,</h5>
          <h5> “Today is the tomorrow you were worried about yesterday”</h5>
          <h4>– Dale Carnegie</h4>
        </p>
      </div>
    </>
  )
}

export default Home
