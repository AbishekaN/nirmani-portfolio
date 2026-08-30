import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }




  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    console.log(formData);

    alert("Thank you for your message!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  }




  return (

    <section id="contact" className="contact">


      <div className="contact-container">


        <div className="contact-content">


          <h2>
            Contact Me
          </h2>



          <h3>
            Let's Work Together
          </h3>



          <p>

            I am open to software engineering opportunities,
            internships, collaborations, and interesting projects.
            Feel free to send me a message and I will get back
            to you.

            <br /><br />

            I am always interested in connecting with people,
            discussing innovative ideas, and exploring opportunities
            to create meaningful technology solutions.

          </p>




          <div className="contact-links">


            <a href="mailto:nirmaniabhisheka99@gmail.com">

              <FaEnvelope />

              Email

            </a>





            <a
              href="https://github.com/AbishekaN"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub />

              GitHub

            </a>





            <a
              href="https://www.linkedin.com/in/nirmani-abisheka-84bbb9180/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin />

              LinkedIn

            </a>



          </div>




          <span>
            📍 Borlänge, Sweden
          </span>



        </div>







        <div className="contact-form">


          <h3>
            Send Me an Email
          </h3>




          <form onSubmit={handleSubmit}>


            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />



            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />



            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />



            <button type="submit">
              Send Message
            </button>


          </form>



        </div>



      </div>


    </section>

  )

}


export default Contact;