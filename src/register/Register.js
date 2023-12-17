import './register.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import background from '../pictures/background.jpg'
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <body>
        <div id="nav-bar">
            <ul className="nav justify-content-end">
                <img src={logo} id="nav-logo"/>
                    <h1 id="nav-logo-text">Vinopedija</h1>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Дома</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Пребарај</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about_us" className="nav-link">За Нас</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Најава</Link>
                    </li>
            </ul>
        </div>
        <div id="main">
            <form id="register-box">
                <label htmlFor="username" id="username-label">Корисничко име</label>
                <label htmlFor="email" id="email-label">Емаил</label>
                <br/>
                <input type="text" id="username" required="true"/>
                <input type="email" id="email" required="true"/>
                <br/>
                <label htmlFor="password" id="password-label">Лозинка</label>
                <label htmlFor="confirm" id="confirm-label">Потврди лозинка</label>
                <br/>
                <input type="password" id="password" required="true"/>
                <input type="password" id="confirm" required="true"/>
                <button type="submit" id="register">Регистрирај се</button>
                <Link to="/login" id="redirect">Логирај се</Link>
            </form>
            <img src={background} id="background-img"/>
        </div>
        <div className="footer">
            <img src={reserved} id="reserved"/>
                <p id="reserved-text">Сите права се задржани.</p>
                <a href="https://www.gmail.com" target="_blank">
                    <img src={gmail} id="gmail"/>
                </a>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossOrigin="anonymous"></script>
        </body>
    )
}
export default Register;