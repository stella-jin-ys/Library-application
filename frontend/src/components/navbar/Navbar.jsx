import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>
      <div className="go-admin">
        <Link className="link"> Go to Admin </Link>
      </div>
    </div>
  );
}
