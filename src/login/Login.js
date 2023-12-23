import './login.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import background from '../pictures/background.jpg'
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const response = await axios.post(
                'http://localhost:8080/api/login',
                formData,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            if (response.data.status === 'LOGGED_IN') {
                const user = response.data;
                alert('Login successful');
                console.log(user)
                sessionStorage.setItem('user', JSON.stringify(user));
                window.location.href="/search";
                // Handle success, e.g., redirect to another page or update global authentication state
            } else {
                alert('Login failed');
                // Handle unsuccessful login, e.g., display an error message
            }
        } catch (error) {
            alert('Login failed: ' + error.response.data);
            // Handle error, e.g., display an error message
        }
    };
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
            <form id="login-box" onSubmit={handleLogin}>
                <label htmlFor="login-username" id="username-label">Корисничко име</label>
                <input type="text" id="login-username" required="true" onChange={e=>setUsername(e.target.value)}/>
                <label htmlFor="login-password" id="password-label">Лозинка</label>
                <input type="password" id="login-password" required="true" onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" id="login">Логирај се</button>
                <Link to="/register" id="redirect">Регистрирај се</Link>
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
export default Login;