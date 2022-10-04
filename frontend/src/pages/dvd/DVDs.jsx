import "./dvds.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DVDs() {
  const [loading, setLoading] = useState(false);
  const [dvds, setDvds] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchDvds = async () => {
      const res = await axios.get("http://localhost:8000/api/dvds");
      console.log(res.data);
      setDvds(res.data);
    };
    fetchDvds();
    setLoading(false);
  }, []);
  return (
    <div className="dvds">
      <Sidebar />
      <div className="dvdsContainer">
        <Navbar />
        <Link to="newDvd" className="link">
          <button className="button">Add New DVD</button>
        </Link>
        <div className="dvdInfo">
          <h1>All DVDs</h1>
          <ul className="dvd">
            {dvds.map((dvd) => (
              <li key={dvd.id}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/851177/pexels-photo-851177.jpeg?auto=compresscs=tinysrgbw=1600"
                    alt=""
                  />
                  <h3>{dvd.title}</h3>
                  <p>{dvd.runtimeMinutes}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
