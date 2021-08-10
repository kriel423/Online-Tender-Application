import './authentication.css';

export default function Login(){
    return(
        <div class="authenticate-outer">
            <div class="authenticate">
                <div class="left-icon">
                    <h2>Tender Portal</h2>
                    <img src="../assets/icons/file-icon.svg" alt="" width="176px" height="176px"/>
                </div>
                <div class="divider"></div>
                <form>
                    <div class="input-group">
                        <img src="../assets/icons/mail.png" alt=""/>
                        <input type="text" placeholder="Enter Email Address"/>
                    </div>
                    <div class="input-group">
                        <img src="../assets/icons/lock.png" alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button type="submit">Login</button>
                    <p><a href="./signup.html">Click here to Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}