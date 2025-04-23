import { useNavigate } from 'react-router-dom';
import '../styles/quote.css';
import { useState, useEffect } from 'react';

const Citation = () => {
    const [citations, setCitations] = useState([]);
    const token =localStorage.getItem('authToken');
    const navigate = useNavigate();



    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/citations')
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setCitations(data.data); 
            });
    }, []);
    const addLike = async (citationId) => {
        if (!token) {
            navigate('/Login');
            return; 
        }
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/Liked', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    citation_id: citationId
                })
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log("Like ajouté :", result.data);
                alert("Citation likée !");
            } else {
                console.log("Erreur lors du like :", result.message);
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
        }
    };
    
      
    const addFavoris = async (citationId) => {
        if (!token) {
            navigate('/Login');
            return;
        }
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/favoris', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    citation_id: citationId
                })
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log("ajoute citation dans favoris  :");
                alert("Citation favorée !");
            } else {
                console.log("Erreur lors du like ");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
        }
    };
    
   
    

    return (
        <div>
            <section className="page-header">
                <h1>Toutes les citations inspirantes</h1>
                <p>Découvrez notre collection complète de citations pour motiver votre journée, stimuler votre créativité et inspirer votre vie.</p>
            </section>

            <section className="all-quotes">
                <div className="quotes-container">
                    {Array.isArray(citations) && citations.map((citation) => (
                        <div className="quote-item dark" key={citation.id}>
                            <p>{citation.texte}</p>
                            <div className="author">— {citation.author || "Anonyme"}</div>
                            {/* <div className="tags">
                                <span className="tag">Philosophie</span>
                                <span className="tag">Vie</span>
                            </div> */}
                            <div className="quote-actions" style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                            <button onClick={() => addLike(citation.id)} className="like-btn">❤️ Like</button>

                                <button  onClick={()=>addFavoris(citation.id)} className="favorite-btn">⭐ Favori</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Citation;
