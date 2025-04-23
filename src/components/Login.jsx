import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
 const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                 const token=  data.token;
                 const user = data.user;
                 if(token){
                    localStorage.setItem('authToken', token); 
                    localStorage.setItem('user', JSON.stringify(user));navigate('/Home');
                     setMessage("login réussie !");
                     navigate('/');
                    
                 }
               
            } else {
                setError(data.message || 'Email ou mot de passe incorrect');
            }
        } catch (err) {
            setError('Erreur serveur, veuillez réessayer plus tard.');
        }
    };

    return (  
        <div>
            <section className="login-container">
                <div className="login-form">
                    <h2>Connexion</h2>
                    {message && <p className="alert" style={{ color: 'green' }}>{message}</p>}

                    <form onSubmit={handleLogin}>
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
                        
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                            Se connecter
                        </button>
                    </form>  

                    <div className="form-footer">
                        <p>Pas encore de compte ? <Link to="/Register">s'inscrire</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
};
 
export default Login;
