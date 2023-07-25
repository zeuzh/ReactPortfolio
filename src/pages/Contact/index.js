import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mknlganb");
  if (state.succeeded) {
      return <p>I'll reach back out ASAP! Thanks!</p>;
  }
  return (
    <div>      
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <input
      id="name"
      type="name"
      name="name"
      placeholder='Name...'
    />
    <ValidationError 
      prefix="Name" 
      field="name"
      errors={state.errors}
    />
    <input
      id="email"
      type="email" 
      name="email"
      placeholder='Email...'
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <textarea
      id="message"
      name="message"
      placeholder='Message...'
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form></div>
  )
}

export default Contact