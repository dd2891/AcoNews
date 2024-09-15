import React, { useEffect, useState } from 'react';
import { fetchLatestNews, searchNews } from './api';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchLatestNews().then((response) => setArticles(response.data.articles));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      searchNews(searchQuery).then((response) => setArticles(response.data.articles));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ACONEWS</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
