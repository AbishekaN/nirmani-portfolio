import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <nav className="navbar">


      <h2>
        Abisheka 
      </h2>



      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>



      <div className={menuOpen ? "nav-links active" : "nav-links"}>

         <h4 className="menu-title">
          Menu
        </h4> 

        <Link 
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>


        <Link 
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>


        <Link 
          to="/skills"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>


        <Link 
          to="/projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>


        <Link 
          to="/education"
          onClick={() => setMenuOpen(false)}
        >
          Education
        </Link>


        <Link 
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>


      </div>


    </nav>

  )

}


export default Navbar;