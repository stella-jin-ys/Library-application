import "./newbook.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NewBook() {
  const navigate = useNavigate();
  const titleInput = useRef();
  const authorInput = useRef();
  const pagesInput = useRef();
  const categoryInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/books", {
        title: titleInput.current.value,
        author: authorInput.current.value,
        pages: pagesInput.current.value,
        type: "book",
        isBorrowable: true,
        categoryId: categoryInput.current.value,
      });
      res.data && navigate("/books");
      titleInput.current.value = "";
      authorInput.current.value = "";
      pagesInput.current.value = "";
      categoryInput.current.value = "";
    } catch (err) {
      new Error(err);
    }
  };

  return (
    <div className="newBook">
      <Sidebar />
      <div className="newBookContainer">
        <Navbar />
        <div className="form">
          <div>
            <label htmlFor="title">Book Title</label>
            <input required type="text" ref={titleInput} id="title" />
          </div>
          <div>
            <label htmlFor="author">Book Author</label>
            <input required type="text" ref={authorInput} id="author" />
          </div>
          <div>
            <label htmlFor="pages">Book Pages</label>
            <input required type="text" ref={pagesInput} id="pages" />
          </div>
          <div>
            <label htmlFor="category">Book Category</label>
            <input required type="text" ref={categoryInput} id="category" />
          </div>
          <button onClick={handleSubmit}>Add New Book</button>
        </div>
      </div>
    </div>
  );
}
