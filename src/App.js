import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("india");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2025-04-09&apiKey=9b17e4b75425463aa280f8f29ae180bd`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className="header">
        <h1>Parso Tak</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search News"
          />
          <button
            onClick={() => {
              if (searchInput.trim() !== "") {
                setCategory(searchInput.trim());
              } else {
                setCategory("india");
              }
            }}
          >
            Search
          </button>
        </div>
      </header>

      <section className="news-articles">
        {
          articles.length !== 0 ?
            articles.map((article, index) => (
              <News key={index} article={article} />
            ))
            :
            <h3>No News Found For Searched Text</h3>
        }
      </section>
    </div>
  );
}

export default App;
