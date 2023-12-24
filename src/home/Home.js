import './home.css'
import logo from '../pictures/logo.jpg'
import pic1 from '../pictures/winery-home.jpg'
import pic2 from '../pictures/country.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import {Link} from "react-router-dom";
import user from "../pictures/user.png";
import axios from "axios";
const Home = () => {
    const Logout = async () => {
        const formData = new FormData();
        formData.append('username',JSON.parse(sessionStorage.getItem('user')).username)
        const response = await axios.post(
            'http://localhost:8080/api/logout',
            formData,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        sessionStorage.removeItem('user');
        alert(response.data)
        window.location.href="/";
    }
    function InfoRedirect() {
        window.location.href="/user"
    }
    return(
        <body>
            <div id="nav-bar">
                <ul className="nav justify-content-end">
                    <img src={logo} id="nav-logo" alt=""/>
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
                    {sessionStorage.getItem('user') ? (
                        <div id="user-info" onClick={InfoRedirect}>
                            <img src={user} id="user-icon" alt=""/>
                            <h3 id="user-name">{JSON.parse(sessionStorage.getItem('user')).name}</h3>
                        </div>
                    ) : (null)}
                    {sessionStorage.getItem('user') ? (
                        <li className="nav-item" onClick={Logout}>
                            <h3 className="nav-link" id="logout">Одјава</h3>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Најава</Link>
                        </li>
                    )}
                </ul>
            </div>
        <div className="main">
            <img src={pic1} id="pic1" alt=""/>
                <p id="img-text1">Пронајдете ја вашата винарија,</p>
                <p id="img-text2">со само неколку кликови</p>
            <img src={pic2} id="pic2" alt=""/>
        </div>
        <div className="shortcuts">
            <ul className="nav-shortcuts">
                <li className="shortcut" id="shortcut-skopje">
                    <a className="link" href="../search">Skopje</a>
                </li>
                <li className="shortcut" id="shortcut-veles">
                    <a className="link" href="../search">Veles</a>
                </li>
                <li className="shortcut" id="shortcut-kavadarci">
                    <a className="link" href="../search">Kavadarci</a>
                </li>
                <li className="shortcut" id="shortcut-negotino">
                    <a className="link" href="../search">Negotino</a>
                </li>
                <li className="shortcut" id="shortcut-ohrid">
                    <a className="link" href="../search">Ohrid</a>
                </li>
            </ul>
        </div>
        <div className="footer">
            <img src={reserved} id="reserved" alt=""/>
                <p id="reserved-text">Сите права се задржани.</p>
                <a href="https://www.gmail.com" target="_blank">
                    <img src={gmail} id="gmail" alt=""/>
                </a>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossOrigin="anonymous"></script>
        </body>
    )
}
export default Home;