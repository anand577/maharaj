import React from 'react'

function About () {
  return (
    <>
      <section className='about-me'>
        <div className='container'>
          <div className='card mt-4'>
            <div className='card-body'>
              <h2 className='head'>About</h2>
            </div>
          </div>
        </div>
        <div>
          <img
            className='anand1'
            src={require('../images/me2.jpg').default}
            hieght={400}
            width={400}
          />
        </div>
        <div className='p-1-about'>
          <h5>Hi,</h5>
          <h5>
            My name is Anand, I am a Software Engineer. I am also a priest of the
            Hindu Faith.
          </h5>
          <p></p>
          <h5>My journey as Software Engineer began in High School.
          I found computer science to be very interesting, and a lot of fun.</h5>
          <h5> </h5>
          <p></p>
          <h5>
            After High School I felt it was my duty to follow in my fathers
            footsteps, so I began my studies as a Priest, however I had a thirst to continue my studies in computer science.</h5>
          <p></p>
          <h5>
            In 2019 I decided to quench the thirst, by starting degree program in
            Computer Science.{' '}
          </h5>
          <h5>
            Not too long after I started my studies came COVID-19, which caused me to continue my studies online, as I completed my Associate degree and continued towards my Bachelors.</h5>
          <p></p>
          <h5>
            In early 2022 I decided to get more into coding so I entered General
            Assembly to do a SEI boot camp which lasted for twelve (12) weeks. 500 hours of learning, practicing, and coding. </h5>
          <p></p>
          <h5>
            In the path of my journey towards becoming a Software Engineer, I
            learned languages like C++, Python, JavaScript. I learned HTML, CSS,
            React, SQL, AWS.
          </h5>
          <h5>
            I was able to build projects, using skills I learned. I used Django,
            Express, MongoDb, Mongoose, Node and I was able to create both front
            and back end, using Heroku and Github to display my work.
          </h5>
          <p></p>
          <h5>
            Some of my projects I have included here. I invite you to please look at
            them on my <a href='projects'>projects-page</a>.
          </h5>
        </div>
      </section>
    </>
  )
}

export default About
