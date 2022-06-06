import React from 'react'
import Form from 'react-bootstrap/Form'

function ConForm () {
  return (
    <>
      <Form.Label className='contact-me-form'>Please message me.</Form.Label>
      <Form>
        <input>Name</input>
      </Form>
    </>
  )
}

export default ConForm
