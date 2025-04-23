import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div>
             <nav className="navbar">
        <div className="logo">
            <span className="quote-icon">“</span>
            <span>YouQuote</span>
        </div>
        <div className="nav-buttons">
        <Link  to="/" className="btn-login">Home</Link>
        <Link to="/Citation" className="btn-login">Citations</Link>
        <Link  to="/Login" className="btn-login">connexion</Link>
        <Link  to="/Register" className="btn-primary">S'inscrire</Link>

           
        </div>
    </nav>
        </div>
    );
}
 
export default Navbar;