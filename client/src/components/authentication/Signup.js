import "./authentication.css";

export default function Signup(){
    return(
        <div className="authenticate-outer">
            <div className="authenticate">
                <div className="left-icon">
                    <h2>Tender Portal</h2>
                    <img src="../assets/icons/file-icon.svg" alt="" width="176px" height="176px"/>
                </div>
                <div className="divider"></div>
                <form>
                    <div className="input-group">
                        <img src="../assets/icons/mail.png" alt=""/>
                        <input type="text" placeholder="Enter Email Address"/>
                    </div>
                    <div className="input-group">
                        <img src="../assets/icons/lock.png" alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-group">
                        <img src="../assets/icons/lock.png" alt=""/>
                        <input type="password" placeholder="Confirm Password"/>
                    </div>
                    <button type="submit">Signup</button>
                    <p><a href="./login.html">Click here to Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}