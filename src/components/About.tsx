import profileImage from "../assets/profile.jpg";


function About() {

  return (

    <section id="about" className="about">


      <div className="about-container">


        <div className="about-image"> 

          <img
            src={profileImage}
            alt="Nirmani Abisheka"
          />

        </div>



        <div className="about-content">


          <h2>
            Hello! I'm Nirmani
          </h2>


          <h3>
            Software Engineer | MSc Data Science Student
          </h3>


          <p>

            I am a Software Engineer with a BSc (Hons) in
            Software Engineering from Cardiff Metropolitan
            University, UK, and currently pursuing an MSc in
            Data Science at Dalarna University, Sweden.

            <br /><br />

            I enjoy building full-stack applications,
            mobile solutions, AI-powered systems, and
            data-driven software solutions. Through university
            and personal projects, I have developed real-world
            systems including business management platforms,
            healthcare systems, and intelligent applications.

            <br /><br />

            I am passionate about learning new technologies
            and creating reliable software solutions that
            solve practical problems.

          </p>



          <div className="about-info">


            <span>
              📍 Borlänge, Sweden
            </span>


            <span>
              🎓 MSc Data Science Student
            </span>


            <span>
              💻 Software Engineer
            </span>


          </div>



        </div>


      </div>



    </section>

  )

}


export default About;