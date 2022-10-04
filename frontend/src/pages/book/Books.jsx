import "./books.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8000/api/books");
      console.log(res.data);
      setBooks(res.data);
    };
    fetchBooks();
    setLoading(false);
  }, []);
  return (
    <div className="books">
      <Sidebar />
      <div className="booksContainer">
        <Navbar />
        <Link to="newbook" className="link">
          <button className="button">Add New Book</button>
        </Link>
        <div className="bookInfo">
          <h1>All Books</h1>
          <ul className="book">
            {books.map((book) => (
              <li key={book.id}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5739623/pexels-photo-5739623.jpeg?auto=compresscs=tinysrgbw=1600"
                    alt=""
                  />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
