import "./audioBooks.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AudioBooks() {
  const [loading, setLoading] = useState(false);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchAudioBooks = async () => {
      const res = await axios.get("http://localhost:8000/api/audioBooks");
      setAudios(res.data);
    };
    fetchAudioBooks();
    setLoading(false);
  }, [setAudios]);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/audioBooks/${id}`);
    setAudios(
      audios.filter((audio) => {
        return audio._id !== id;
      })
    );
  };
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className="audios">
      <Sidebar />
      <div className="audiosContainer">
        <Navbar />
        <Link to="newAudio" className="link">
          <button className="button">Add New Book</button>
        </Link>
        <div className="audioInfo">
          <h1>All Audio Books</h1>
          <ul>
            {audios.reverse().map((audio) => (
              <li key={audio._id}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compresscs=tinysrgbw=1600"
                    alt=""
                  />
                  <h3>{audio.title}</h3>
                  <p>Runtime {audio.runtimeMinutes}</p>
                  <button
                    className="delete"
                    onClick={() => handleDelete(audio._id)}
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
