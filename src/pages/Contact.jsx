import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          Open to software engineering opportunities and collaborations.
        </p>

        <div className="contact-links">
          <a 
            href="mailto:marioflores1717@outlook.com" 
            className="contact-card"
          >
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>marioflores1717@outlook.com</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/385ab-mario-flores/" 
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>/in/385ab-mario-flores/</p>
          </a>

          <a 
            href="https://github.com/Mflo177" 
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>@Mflo177</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact