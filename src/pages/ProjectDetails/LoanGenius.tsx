import { Link } from "react-router-dom";

import screen1 from "../../assets/projects/loangenius/screen1.png";
import screen2 from "../../assets/projects/loangenius/screen2.png";
import screen3 from "../../assets/projects/loangenius/screen3.png";
import screen4 from "../../assets/projects/loangenius/screen4.png";

function LoanGenius() {

  return (

    <section className="project-details">


      <h1>
        LoanGenius
      </h1>


      <h2>
        AI Loan Prediction System
      </h2>


      <p>
        LoanGenius is an AI-powered mobile application
        developed to predict loan eligibility and support
        financial decision-making using intelligent data
        analysis.
      </p>



      <div className="project-images">


        <img
          src={screen1}
          alt="LoanGenius Mobile Screen 1"
        />


        <img
          src={screen2}
          alt="LoanGenius Mobile Screen 2"
        />


        <img
          src={screen3}
          alt="LoanGenius Mobile Screen 3"
        />


        <img
          src={screen4}
          alt="LoanGenius Mobile Screen 4"
        />


      </div>





      <h3>
        Project Type
      </h3>

      <p>
        University Project - Final Year Project
      </p>




      <h3>
        Technologies Used
      </h3>

      <p>
        Flutter | Dart | Firebase | Artificial Intelligence |
        Machine Learning
      </p>




      <h3>
        Key Features
      </h3>


      <ul>

        <li>
          Loan eligibility prediction
        </li>

        <li>
          User-friendly mobile interface
        </li>

        <li>
          Applicant data analysis
        </li>

        <li>
          Firebase database integration
        </li>

        <li>
          AI-based decision support
        </li>

      </ul>





      <h3>
        My Contribution
      </h3>


      <p>
        
        For this project, I focused on building an intelligent
        mobile application that combines Flutter development
        with AI-based loan prediction capabilities.

        My work involved creating the mobile interfaces, connecting
        Firebase services, and developing features that help users
        understand loan eligibility decisions.

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


export default LoanGenius;