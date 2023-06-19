import "./navbar.css";
import SearchBar from "../SearchBar";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const Navbar = ({ users, setSearchResults }) => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left">
          <a href="/">
            <img src="./images/logo.png" alt="" />
          </a>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movieStars">Movie Stars</Link>
          </nav>
        </div>
        <div className="right">
          <SearchBar
            placeholder="Search a movie series..."
            users={users}
            setSearchResults={setSearchResults}
          />
          <div className="socialMedia">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
