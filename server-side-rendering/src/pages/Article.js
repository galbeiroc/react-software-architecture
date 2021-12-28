import React from 'react';
import { useDataSSR } from '../hooks/useDataSSR';

const Article = () => {
  const articles= useDataSSR('articles', () => {
      console.log('No preloaded');
      return fetch('http://localhost:8080/api/articles')
        .then((res) => res.json())
        .catch((err) => console.log(err));
  });

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
