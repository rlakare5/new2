
import React from 'react';

const ProductsSection = () => {
  return (
    <section id="about" className="products-section">
      <h2>Enjoy the Fizzy</h2>
      <div className="products-grid">
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Iced Tea" />
          <button className="product-tag">Sip into Refreshment</button>
          <h3>Iced Tea, Perfectly Chilled</h3>
          <p>Indulge in the Refreshing Blend of our Iced Tea, infused with the perfect balance of citrus and herbal notes to quench your thirst and revive your senses</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Iced Coffee" />
          <button className="product-tag">Energize with Iced Coffee</button>
          <h3>Iced Coffee, Smooth and Bold</h3>
          <p>Experience the rich, bold flavor of our Iced Coffee, crafted with premium beans and served over ice for a refreshing pick-me-up any time of day</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Iced Water" />
          <button className="product-tag">Chill with Iced Water</button>
          <h3>Iced Water, Crystal Clear</h3>
          <p>Pure, refreshing water served ice-cold to hydrate and revitalize your body with every sip</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
