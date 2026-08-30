import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";


function Home() {

  return (

    <section className="hero">


      <div className="hero-container">


        <div className="hero-image">

          <img 
            src={profileImage}
            alt="Nirmani Abisheka"
          />

        </div>




        <div className="hero-content">


          <h1>
            Nirmani Abisheka
          </h1>


          <h2>
            Software Engineer | MSc Data Science Student
          </h2>


          <p>
            I am a Software Engineer with a BSc (Hons) in Software Engineering
            and currently pursuing an MSc in Data Science at Dalarna University,
            Sweden. I build software solutions, web applications, and
            data-driven systems.

            My experience includes developing full-stack applications,
            mobile solutions, and business management systems while exploring
            the power of artificial intelligence and data-driven technologies.
          </p>





          <div className="hero-buttons">


            <Link to="/projects">
              <button>
                View Projects
              </button>
            </Link>



            <a 
              href="/CV.pdf"
              download
              className="cv-button"
            >
              Download CV
            </a>


          </div>



        </div>



      </div>


    </section>

  )

}


export default Home;