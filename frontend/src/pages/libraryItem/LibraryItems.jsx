import "./libraryItems.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LibraryItems() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchItems = async () => {
      const res = await axios.get("http://localhost:8000/api/libraryItems");
      console.log(res.data);
      setItems(res.data);
    };
    fetchItems();
    setLoading(false);
  }, []);
  return (
    <div className="books">
      <Sidebar />
      <div className="booksContainer">
        <Navbar />
        <Link to="newbook" className="link">
          <button className="button">Add New Item</button>
        </Link>
        <div className="bookInfo">
          <h1>All Items</h1>
          <ul className="book">
            {items.map((item) => (
              <li key={item.id}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5739623/pexels-photo-5739623.jpeg?auto=compresscs=tinysrgbw=1600"
                    alt=""
                  />
                  <h3>{item.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
