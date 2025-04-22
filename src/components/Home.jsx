// src/App.jsx



function Home() {
  return (
    <div>
   

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>Gardez vos <span>citations préférées</span> à portée de main.</h1>
          <p>Créez, organisez et partagez vos pensées inspirantes.</p>
          <a href="#" className="btn-primary">Explorer</a>
        </div>
        <div className="hero-visual">
          <div className="floating-quote">
            <p>"La simplicité est la sophistication suprême."</p>
            <span>— Léonard de Vinci</span>
          </div>
        </div>
      </header>

      {/* Trending Quotes */}
      <section className="trending">
        <h2>Citations tendances</h2>
        <div className="quote-grid">
          <div className="quote-card">
            <p>"Le courage n'est pas l'absence de peur, mais la capacité de la vaincre."</p>
            <div className="author">— Nelson Mandela</div>
          </div>
          <div className="quote-card dark">
            <p>"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre."</p>
            <div className="author">— Albert Einstein</div>
          </div>
          <div className="quote-card">
            <p>"La créativité, c'est l'intelligence qui s'amuse."</p>
            <div className="author">— Albert Einstein</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Prêt à commencer votre collection ?</h2>
        <a href="#" className="btn-primary">Créer un compte gratuit</a>
      </section>

    
     
    </div>
  );
}

export default Home;