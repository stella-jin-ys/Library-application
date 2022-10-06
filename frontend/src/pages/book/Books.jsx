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
      setBooks(res.data);
    };
    fetchBooks();
    setLoading(false);
  }, [setBooks]);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/books/${id}`);
    setBooks(
      books.filter((book) => {
        return book._id !== id;
      })
    );
  };
  if (loading) {
    return <p>Loading</p>;
  }
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
          <ul>
            {books.reverse().map((book) => (
              <li key={book._id}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5739623/pexels-photo-5739623.jpeg?auto=compresscs=tinysrgbw=1600"
                    alt=""
                  />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <button
                    className="delete"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
