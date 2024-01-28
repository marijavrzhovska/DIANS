import './user.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import background from '../pictures/background.jpg'
import {Link} from "react-router-dom";
import axios from "axios";
import user from "../pictures/user.png";
import {useEffect} from "react";
const User = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('user'))
    const Logout = async () => {
        const formData = new FormData();
        formData.append('username',userInfo.username)
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
                {sessionStorage.getItem('user') ? (
                    <div id="user-info">
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
        <div id="main">
            <div id="about_us">
                <h2>Корисничко име: {userInfo.username}</h2>
                <h2>Име: {userInfo.name}</h2>
                <h2>Презиме: {userInfo.surname}</h2>
                <h2>Омилени винарии: {userInfo.rates}</h2>
                <h2>Оцени: {userInfo.wineryList}</h2>
            </div>
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
export default User;