
import React from 'react';

const ClientsSection = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="clients-content">
        <div className="clients-image">
          <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="ChillFizz Glass" />
        </div>
        <div className="clients-text">
          <h2>Discover Our Clients</h2>
          <h3>Trusted by Leading Brands</h3>
          <p>At ChillFizz, we are proud to partner with a diverse range of esteemed brands and organizations</p>
          
          <div className="client-logos">
            <div className="client-row">
              <div className="client-logo">
                <div className="client-icon shell">🐚</div>
                <div>
                  <strong>Shell</strong>
                  <p>Partner</p>
                </div>
              </div>
              <div className="client-logo">
                <div className="client-icon apple">🍎</div>
                <div>
                  <strong>Apple</strong>
                  <p>Microsoft</p>
                </div>
              </div>
            </div>
            <div className="client-row">
              <div className="client-logo">
                <div className="client-icon coca">🥤</div>
                <div>
                  <strong>Coca-Cola</strong>
                  <p>Nestle</p>
                </div>
              </div>
              <div className="client-logo">
                <div className="client-icon amazon">📦</div>
                <div>
                  <strong>Amazon</strong>
                  <p>Google</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="join-btn">Join Our Team</button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
