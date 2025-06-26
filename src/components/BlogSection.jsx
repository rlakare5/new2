
import React from 'react';

const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-content">
        <div className="blog-image">
          <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="ChillFizz Blog" />
        </div>
        <div className="blog-text">
          <h2>Latest from our Blog</h2>
          <p>Stay updated with the latest news, recipes, and refreshing stories from the world of ChillFizz. Discover new ways to enjoy your favorite fizzy drinks and learn about our commitment to quality and sustainability.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
