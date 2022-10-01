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
      </div>
    </div>
  );
}
