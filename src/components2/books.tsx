import React, { useState } from "react";
import axios from "axios";
import "./books.css";

const Books: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any[]>([]);
  const apiKey = "AIzaSyBPnT0ysJoHzskZKwu6ClWgxQ5SPPfwOsE";

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&&maxResults=40`
      )
      .then((res) => {
        const data = res.data as { items: any[] };
        console.log(data.items);
        setResult(data.items);
      });
  };

  return (
    <div className="books-container">
      <form onSubmit={handlesubmit}>
        <h1 className="title">Books Store</h1>
        <input
          type="text"
          placeholder="Search Books"
          className="search-input"
          onChange={handlechange}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="books">
        {result.map((book: any, index: number) => {
          return (
            <div key={index} className="book">
              <a href={book.saleInfo.buyLink}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
