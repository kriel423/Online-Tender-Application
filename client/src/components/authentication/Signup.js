import "./authentication.css";
import {Link} from "react-router-dom";
//images
import file_icon from "../../assets/file-icon.svg";
import mail_icon from "../../assets/mail.png"
import lock_icon from "../../assets/lock.png"

export default function Signup(){
    return(
        <div className="authenticate-outer">
            <div className="authenticate">
                <div className="left-icon">
                    <h2>Tender Portal</h2>
                    <img src={file_icon} alt="" width="176px" height="176px"/>
                </div>
                <div className="divider"></div>
                <form>
                    <div className="input-group">
                        <img src={mail_icon} alt=""/>
                        <input type="text" placeholder="Enter Email Address"/>
                    </div>
                    <div className="input-group">
                        <img src={lock_icon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-group">
                        <img src={lock_icon} alt=""/>
                        <input type="password" placeholder="Confirm Password"/>
                    </div>
                    <button type="submit">Signup</button>
                    <p><Link to="/login">Click here to Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}