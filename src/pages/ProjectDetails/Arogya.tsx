import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/arogya/screen1.png";
import screen2 from "../../assets/projects/arogya/screen2.png";
import screen3 from "../../assets/projects/arogya/screen3.png";
import screen4 from "../../assets/projects/arogya/screen4.png";


function Arogya() {

  return (

    <section className="project-details">


      <h1>
        Arogya Health Care System
      </h1>


      <h2>
        Hospital Management System
      </h2>



      <p>

        Arogya Health Care System is a web-based hospital
        management solution developed to manage healthcare
        operations including patient information, medical
        records, appointments, and administrative activities.

        The system helps organize healthcare processes and
        improve the efficiency of daily hospital operations.

      </p>





      <div className="project-images web-images">


        <img
          src={screen1}
          alt="Arogya Health Care Screen 1"
        />


        <img
          src={screen2}
          alt="Arogya Health Care Screen 2"
        />


        <img
          src={screen3}
          alt="Arogya Health Care Screen 3"
        />


        <img
          src={screen4}
          alt="Arogya Health Care Screen 4"
        />


      </div>





      <h3>
        Project Type
      </h3>


      <p>
        University Project
      </p>





      <h3>
        Technologies Used
      </h3>


      <p>
        PHP | MySQL | phpMyAdmin | Web Development
      </p>





      <h3>
        Key Features
      </h3>


      <ul>

        <li>
          Patient information management
        </li>

        <li>
          Doctor and healthcare staff management
        </li>

        <li>
          Appointment management
        </li>

        <li>
          Medical record management
        </li>

        <li>
          Database-driven healthcare operations
        </li>

      </ul>





      <h3>
        My Contribution
      </h3>


        <p>

            The development of Arogya focused on creating a digital
            solution for managing healthcare-related activities.

            I created the system features for handling patient records,
            appointments, and healthcare information while working with
            PHP and MySQL database functionality.

        </p>





      <Link 
        to="/projects" 
        className="back-button"
      >

        ← Back to Projects

      </Link>



    </section>

  )

}


export default Arogya;