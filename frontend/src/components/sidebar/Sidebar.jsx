import "./sidebar.scss";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EjectOutlinedIcon from "@mui/icons-material/EjectOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">E-Library</span>
      </div>
      <hr />
      <div className="center">
        <ul>
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

          <p className="title">Types</p>
          <li>
            <MenuBookOutlinedIcon className="icon" />
            Book
          </li>
          <li>
            <EjectOutlinedIcon className="icon" />
            DVD
          </li>
          <li>
            <GraphicEqOutlinedIcon className="icon" /> Audio Book
          </li>
          <li>
            <PsychologyAltOutlinedIcon className="icon" /> Reference Book
          </li>
        </ul>
      </div>
    </div>
  );
}
