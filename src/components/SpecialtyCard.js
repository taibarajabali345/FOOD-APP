import React from 'react';
import { Link } from 'react-router-dom';

function SpecialtyCard({ image, title, description, link }) {
  return (
    <div className="specialty-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="btn">View More</Link> {/* Added the link */}
    </div>
  );
}

export default SpecialtyCard;
