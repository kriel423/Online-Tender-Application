import "./navigation.css"
import {BrowserRouter as Router, Link} from "react-router-dom"
//images
import file_icon from "../../assets/file-icon.svg"

export default function NavigationBar(){
    return(
        <Router>
            <nav className="top-nav">
                <img src={file_icon} alt="" width="44px"/>
                <ul class="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/company-details">COMPANY DETAILS</Link>
                    <Link to="/submission-data">SUBMISSION DATA</Link>
                    <Link to="/about">ABOUT</Link>
                </ul>
            </nav>
        </Router>
    )
}