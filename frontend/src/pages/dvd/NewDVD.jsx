import "./newDvd.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NewDVD() {
  const navigate = useNavigate();
  const titleInput = useRef();
  const runtimeMinuteInput = useRef();
  const categoryInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/dvds", {
        title: titleInput.current.value,
        runtimeMinute: runtimeMinuteInput.current.value,
        type: "dvd",
        isBorrowable: true,
        categoryId: categoryInput.current.value,
      });
      res.data && navigate("/dvds");
      titleInput.current.value = "";
      runtimeMinuteInput.current.value = "";
      categoryInput.current.value = "";
    } catch (err) {
      new Error(err);
    }
  };

  return (
    <div className="newDvd">
      <Sidebar />
      <div className="newDvdContainer">
        <Navbar />
        <div className="form">
          <div>
            <label htmlFor="title">DVD Title</label>
            <input required type="text" ref={titleInput} id="title" />
          </div>
          <div>
            <label htmlFor="runtimeMinute">DVD RuntimeMinute</label>
            <input
              required
              type="text"
              ref={runtimeMinuteInput}
              id="runtimeMinute"
            />
          </div>
          <div>
            <label htmlFor="category">DVD Category</label>
            <input required type="text" ref={categoryInput} id="category" />
          </div>
          <button onClick={handleSubmit}>Add New DVD</button>
        </div>
      </div>
    </div>
  );
}
