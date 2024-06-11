import React from 'react';
import './Article.css';

const ArticleComponent = ({ image, title, date, category }) => (
  <div className="article">
    <img src={image} alt={title} className="article-image" />
    <div className="article-content">
      <span className="category">{category}</span>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  </div>
);


export default ArticleComponent;
