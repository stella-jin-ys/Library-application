import "./sidebar.scss";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EjectOutlinedIcon from "@mui/icons-material/EjectOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">E-Library</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Types</p>
          <li>
            <Link to="/books" className="link">
              <MenuBookOutlinedIcon className="icon" />
              Book
            </Link>
          </li>
          <li>
            <Link to="/dvds" className="link">
              <EjectOutlinedIcon className="icon" />
              DVD
            </Link>
          </li>
          <li>
            <GraphicEqOutlinedIcon className="icon" /> Audio Book
          </li>
          <li>
            <PsychologyAltOutlinedIcon className="icon" /> Reference Book
          </li>
          <p className="title">Category</p>
          <li>
            <SpaOutlinedIcon className="icon" />
            Nature
          </li>
          <li>
            <BubbleChartOutlinedIcon className="icon" />
            Art
          </li>
          <li>
            <ScienceOutlinedIcon className="icon" />
            Science
          </li>
        </ul>
      </div>
    </div>
  );
}
