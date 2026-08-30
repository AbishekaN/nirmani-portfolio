import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/fixcell/screen1.png";
import screen2 from "../../assets/projects/fixcell/screen2.png";
import screen3 from "../../assets/projects/fixcell/screen3.png";
import screen4 from "../../assets/projects/fixcell/screen4.png";


function MobileShop() {

  return (

    <section className="project-details">


      <h1>
        Fixcell Pro Mobile
      </h1>


      <h2>
        Mobile Phone Shop Management System
      </h2>



      <p>

        Fixcell Pro Mobile is a complete mobile phone shop
        management system developed to manage mobile stock,
        customer repairs, sales transactions, billing
        operations, and daily shop activities.

        The system helps manage inventory, generate
        customized bills, track repair services, and
        maintain customer and order information efficiently.

      </p>





      <div className="project-images">


        <img
          src={screen1}
          alt="Fixcell Pro Dashboard"
        />


        <img
          src={screen2}
          alt="Fixcell Pro Stock Management" 
        />


        <img
          src={screen3}
          alt="Fixcell Pro Repair Management"
        />


        <img
          src={screen4}
          alt="Fixcell Pro Billing System"
        />


      </div>





      <h3>
        Project Type
      </h3>


      <p>
        Personal Project - Business Management System
      </p>





      <h3>
        Technologies Used
      </h3>


      <p>
        Flutter | Dart | Firebase
      </p>





      <h3>
        Key Features
      </h3>


      <ul>


        <li>
          Mobile phone inventory management
        </li>


        <li>
          Repair service management
        </li>


        <li>
          Customer information management
        </li>


        <li>
          Sales and billing operations
        </li>


        <li>
          Custom invoice generation
        </li>


        <li>
          Previous bill history tracking
        </li>


        <li>
          Order and stock management
        </li>


      </ul>





      <h3>
        My Contribution
      </h3>


      <p>

        Fixcell Pro Mobile was developed as a complete management
        solution for a mobile phone shop business, covering both
        sales operations and repair services.

        The system includes features for managing mobile stock,
        customer repairs, billing processes, order tracking, and
        maintaining previous transaction records to support daily
        business activities.

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


export default MobileShop;