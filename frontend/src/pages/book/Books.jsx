import "./books.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <div className="books">
      <Sidebar />
      <div className="booksContainer">
        <Navbar />
        <Link to="/books/newbook" className="link">
          <button className="button">New Book</button>
        </Link>
        <div>
          <h1>All Books</h1>
          <table>
            <tr>
              <th>Book Title</th>
              <th>Book Author</th>
              <th>Book Pages</th>
              <th>Book Type</th>
              <th>Book Is Borrowable</th>
              <th>Book Category</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
