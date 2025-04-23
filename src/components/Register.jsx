import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
 const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        const token = result.token;  
        const user = result.user;
        
        if (token) {
         console.log("token",token);
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify(user));
          setMessage("Inscription réussie ! Token stocké.");
          navigate("/");
      } else {
          setMessage("Token non trouvé dans la réponse.");
      }
        setMessage("Inscription réussie !");
        
      } else {
        setMessage(result.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Une erreur s'est produite.");
    }
  };

  return (
    <div>
      <section className="signup-container">
        <div className="signup-form">
          <h2>Créer un compte</h2>
          {message && <p className="alert" style={{ color: 'green' }}>{message}</p>}
        
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              S'inscrire
            </button>

            <div className="form-footer">
              <p>Déjà un compte ? <Link to="/Login"></Link></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;

