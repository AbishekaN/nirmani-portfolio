import { Link } from "react-router-dom";


function Projects() {

  return (

    <section id="projects" className="projects">


      <h2>
        My Projects
      </h2>


      <p className="project-intro">
        Throughout my academic journey and personal development,
        I have worked on a variety of software projects involving
        web applications, mobile applications, database systems,
        and data-driven solutions. These projects include university
        projects as well as independent projects developed to solve
        real-world business problems using modern technologies.
      </p>



      <h3 className="project-category">
        University Projects
      </h3>



      <div className="projects-container">


        <div className="project-card">

          <h3>
            Loan Genius
          </h3>

          <p>
            An AI-powered Flutter Android application
            developed to predict loan eligibility and
            support financial decision making.
          </p>

          <span>
            Flutter | Dart | AI | Firebase
          </span>

          <Link to="/projects/loangenius">
            View Details
          </Link>

        </div>





        <div className="project-card">

          <h3>
            Ayubo Drive Car Rental Management System
          </h3>

          <p>
            A vehicle rental management system
            developed to manage vehicles, customers,
            bookings, rental calculations and operations.
          </p>

          <span>
            C# | .NET | Microsoft SQL Server
          </span>

          <Link to="/projects/ayubo-drive">
            View Details
          </Link>

        </div>





        <div className="project-card">

          <h3>
            Arogya Health Care
          </h3>

          <p>
            A hospital management system developed
            to manage patients, appointments, doctors
            and healthcare information.
          </p>

          <span>
            PHP | MySQL | phpMyAdmin
          </span>

          <Link to="/projects/arogya">
            View Details
          </Link>

        </div>





        <div className="project-card">

          <h3>
            Dental Care Management System
          </h3>

          <p>
            A dental clinic management system developed
            to manage patients, appointments, treatments
            and dental care operations.
          </p>

          <span>
            C# | OOP | Database Management
          </span>

          <Link to="/projects/dental-care">
            View Details
          </Link>

        </div>


      </div>





      <h3 className="project-category">
        Personal Projects
      </h3>





      <div className="projects-container">



        <div className="project-card">

            <h3>
              UNIC Gold House
            </h3>

            <p>
              A full-stack jewellery inventory and sales
              management system developed to manage stock,
              sales, orders, profit analysis, and jewellery
              item label printing.
            </p>

            <span>
              TypeScript | MongoDB | Full-Stack Development
            </span>

            <Link to="/projects/unic-gold-house">
              View Details
            </Link>

          </div>


        <div className="project-card">

          <h3>
            FixCell Pro Mobile
          </h3>

          <p>
            A complete mobile retail management system
            developed to manage phone inventory, repairs,
            billing, sales, and order operations.
          </p>

          <span>
            Flutter | Dart | Firebase
          </span>

          <Link to="/projects/mobile-shop">
            View Details
          </Link>

        </div>

      </div>


    </section>

  )

}


export default Projects;