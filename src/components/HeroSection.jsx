
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Refreshing<br />ChillFizz</h1>
          <p>Dive into the world of ChillFizz, where fizzy delights and vibrant flavors come together to create a truly refreshing experience</p>
          <button className="explore-btn">Explore Now</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="ChillFizz Drink" />
        </div>
        <div className="side-text">CHILL YOUR LIFE</div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🥤</div>
          <h3>Crafted with</h3>
          <p>Our craft sodas offer fresh flavors</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔍</div>
          <h3>Discover the Secret to our Fizzy Goodness</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">🧊</div>
          <h3>Unlock the Refreshing Potential of our Innovative Cold Drink</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">✨</div>
          <h3>Indulge in the Effervescent Bliss of ChillFizz</h3>
        </div>
        <div className="feature">
          <div className="feature-icon">💧</div>
          <h3>Thirst+</h3>
          <p>Experience the Fizzy Fusion of Flavors with ChillFizz</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
