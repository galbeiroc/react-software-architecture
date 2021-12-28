import React, { useState, useEffect } from 'react';

const Article = () => {
  const [articles, setArticles] = useState(window && window.preloadedArticles);

  useEffect(() => {
    if (window && !window.preloadedArticles) {
      console.log('No preloaded');
      fetch('/api/articles')
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => console.log(err));
    }
  }, []);
  console.log(articles)
  return (
    <>
      <h1>Articles</h1>
      {articles && articles.map(article =>(
        <div key={article.title}>
          <h4>{article.title}</h4>
          <p>{article.author}</p>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  )
}

export default Article;
