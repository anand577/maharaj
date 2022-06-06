import React from 'react'

function Contact () {
  return (
    <>
      <div className='container'>
        <div className='card mt-4'>
          <div className='row'>
            <div className='col-md-4 my-auto'> </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'></div>
                <h6>Contact Form</h6>
                <hr />
                <div className='form-group'>
                  <label className='mb-1'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your name' required
                  />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Phone:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your phone number' required
                  />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Email:</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your email' required
                  />
                </div>
                <div className='form-group'>
                  <label className='mb-1'>Message</label>
                  <textarea
                    rows='3'
                    className='form-control'
                    placeholder='Your message ...'></textarea>
                </div>
                <div className='form-group'>
                  <button type='button' className='btn btn-primary shadow'>
                  Send Message
                  </button>
                </div>
                <div className='col-md-6'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'></div>
                <h4>My Information</h4>
                <hr />
                <h4>Anand Maharaj </h4>
                <h6><a href='tel:7176079674'>Phone: 718-607-9674</a></h6>
                <h6>
                  <a href='mailto:anandmaharaj577@gmail.com'>
                  Email: anandmaharaj577@gmail.com
                  </a>
                </h6>
                <h6>
                  <a
                    href='https://www.linkedin.com/in/anand-maharaj/'
                    target='_blank'
                    rel='noreferrer'>Linkedin.
                  </a>
                </h6>
                <h6><a href='https://github.com/ptanand' target='_blank' rel='noreferrer'>github. </a></h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
