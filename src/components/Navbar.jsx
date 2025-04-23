import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/Login");
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="quote-icon">“</span>
                <span>YouQuote</span>
            </div>
            <div className="nav-buttons">
                <Link to="/" className="btn-login">Home</Link>
                <Link to="/Citation" className="btn-login">Citations</Link>

                {user ? (
                    <>
                        <Link to="/MesCitations" className="btn-login">Mes citations</Link>
                        <button onClick={handleLogout} className="btn-primary">Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link to="/Login" className="btn-login">Connexion</Link>
                        <Link to="/Register" className="btn-primary">S'inscrire</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
