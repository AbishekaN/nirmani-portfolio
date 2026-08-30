import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/unic/screen1.png";
import screen2 from "../../assets/projects/unic/screen2.png";
import screen3 from "../../assets/projects/unic/screen3.png";
import screen4 from "../../assets/projects/unic/screen4.png";
import screen5 from "../../assets/projects/unic/screen5.png";


function UNICGold() {

  return (

    <section className="project-details">


      <h1>
        UNIC Gold House Management System
      </h1>


      <h2>
        Inventory & Sales Management System
      </h2>



      <p>

        UNIC Gold House Management System is a full-stack
        business management solution developed to manage
        jewellery inventory, sales operations, customer
        transactions, and daily business activities.

        The system uses Supabase for database management
        and backend services, allowing efficient handling of
        stock information, sales records, reports, and business
        operations.

      </p>





      <div className="project-images web-images">


        <img
          src={screen1}
          alt="UNIC Gold Dashboard"
        />


        <img
          src={screen2}
          alt="UNIC Gold Inventory Management"
        />


        <img
          src={screen3}
          alt="UNIC Gold Sales Reports"
        />


        <img
          src={screen4}
          alt="UNIC Gold Label Printing"
        />

         <img
          src={screen5}
          alt="UNIC Gold Label Printing"
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
        TypeScript | Supabase | Full-Stack Development
      </p>





      <h3>
        Key Features
      </h3>


      <ul>

        <li>
          Jewellery inventory management
        </li>

        <li>
          Stock monitoring and product management
        </li>

        <li>
          Daily sales tracking
        </li>

        <li>
          Monthly and yearly sales reports
        </li>

        <li>
          Profit and loss monitoring
        </li>

        <li>
          Customer orders and transaction management
        </li>

        <li>
          Jewellery label printing functionality
        </li>

      </ul>





      <h3>
        My Contribution
      </h3>


      <p>

        UNIC Gold House was developed as a complete business
        management platform for jewellery shop operations.

        I independently created the system to manage inventory,
        sales tracking, profit and loss monitoring, customer orders,
        and jewellery label printing using TypeScript and Supabase.

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


export default UNICGold;