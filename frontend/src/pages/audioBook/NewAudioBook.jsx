import "./newAudioBook.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NewAudioBook() {
  const navigate = useNavigate();
  const titleInput = useRef();
  const runtimeMinuteInput = useRef();
  const categoryInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/audioBooks", {
        title: titleInput.current.value,
        runtimeMinute: runtimeMinuteInput.current.value,
        type: "audioBook",
        isBorrowable: true,
        categoryId: categoryInput.current.value,
      });
      res.data && navigate("/audioBooks");
      titleInput.current.value = "";
      runtimeMinuteInput.current.value = "";
      categoryInput.current.value = "";
    } catch (err) {
      new Error(err);
    }
  };

  return (
    <div className="newAudio">
      <Sidebar />
      <div className="newAudioContainer">
        <Navbar />
        <div className="form">
          <div>
            <label htmlFor="title">Audio Book Title</label>
            <input required type="text" ref={titleInput} id="title" />
          </div>
          <div>
            <label htmlFor="runtimeMinute">Audio Book RuntimeMinute</label>
            <input
              required
              type="text"
              ref={runtimeMinuteInput}
              id="runtimeMinute"
            />
          </div>
          <div>
            <label htmlFor="category">Audio Book Category</label>
            <input required type="text" ref={categoryInput} id="category" />
          </div>
          <button onClick={handleSubmit}>Add New Audio Book </button>
        </div>
      </div>
    </div>
  );
}
