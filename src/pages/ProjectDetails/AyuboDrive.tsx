import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/ayubo/screen1.png";
import screen2 from "../../assets/projects/ayubo/screen2.png";
import screen3 from "../../assets/projects/ayubo/screen3.png";
import screen4 from "../../assets/projects/ayubo/screen4.png";


function AyuboDrive() {

  return (

    <section className="project-details">


      <h1>
        Ayubo Drive
      </h1>


      <h2>
        Car Rental Management System
      </h2>



      <p>

        Ayubo Drive is a complete car rental management
        system developed to manage vehicles, customers,
        bookings, and rental operations efficiently.
        The system helps organize daily rental activities
        and improve business management processes.

      </p>





      <div className="project-images">


        <img
          src={screen1}
          alt="Ayubo Drive Screen 1"
        />


        <img
          src={screen2}
          alt="Ayubo Drive Screen 2"
        />


        <img
          src={screen3}
          alt="Ayubo Drive Screen 3" 
        />


        <img
          src={screen4}
          alt="Ayubo Drive Screen 4"
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
        C# | Microsoft SQL Server | Windows Application Development
      </p>





      <h3>
        Key Features
      </h3>


      <ul>

        <li>
          Vehicle management
        </li>

        <li>
          Customer registration and management
        </li>

        <li>
          Vehicle booking and rental operations
        </li>

        <li>
          Rental information management
        </li>

        <li>
          Database integration using Microsoft SQL Server
        </li>

      </ul>





      <h3>
        My Contribution
      </h3>


      <p>

        This system was developed to provide a complete solution
        for managing vehicle rental operations.

        I worked on designing the application structure, handling
        vehicle and customer management, and connecting the system
        with Microsoft SQL Server for reliable data storage.

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


export default AyuboDrive;