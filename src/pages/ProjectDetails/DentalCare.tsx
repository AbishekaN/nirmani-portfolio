import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/dental/screen1.png";
import screen2 from "../../assets/projects/dental/screen2.png";
import screen3 from "../../assets/projects/dental/screen3.png";
import screen4 from "../../assets/projects/dental/screen4.png";


function DentalCare() {

  return (

    <section className="project-details">


      <h1>
        Dental Care System
      </h1>


      <h2>
        Dental Clinic Management System
      </h2>



      <p>

        Dental Care System is a healthcare management
        application developed to support dental clinic
        operations. The system helps manage patient
        information, appointments, treatments, and
        administrative activities efficiently.

      </p>




      <div className="project-images">


        <img
          src={screen1}
          alt="Dental Care System Screen 1"
        />


        <img
          src={screen2}
          alt="Dental Care System Screen 2"
        />


        <img
          src={screen3}
          alt="Dental Care System Screen 3"
        />


        <img
          src={screen4}
          alt="Dental Care System Screen 4"
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
          Patient registration and management
        </li>

        <li>
          Appointment scheduling
        </li>

        <li>
          Treatment information management
        </li>

        <li>
          Dental clinic operation management
        </li>

        <li>
          Database-driven system functionality
        </li>

      </ul>





      <h3>
        My Contribution
      </h3>


      <p>

        This project involved developing a clinic management
        solution to simplify daily dental care operations.

        My contribution included building the system workflow,
        managing patient-related information, and creating database
        operations to support clinic activities.

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


export default DentalCare;