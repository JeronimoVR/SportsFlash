import React from 'react';

  const NewsArticle = ({ articles }) => {
    return (
        <div className="news-grid">
            {articles.map((article, index) => (
                <div className="news-card" key={index}>
                    <img src={article.image} alt={article.title} className="news-image" />
                    <div className="news-content">
                        <span className="news-category">{article.category}</span>
                        <h3 className="news-title">{article.title}</h3>
                        <span className="news-date">{article.date}</span>
                        {article.live && <span className="live-indicator">🔴 EN VIVO HOY</span>}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default NewsArticle;
