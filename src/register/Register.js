import './register.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import background from '../pictures/background.jpg'
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
const Register = () => {
    const [username,setUsername] = useState("");
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('password', password);
        formData.append('repeatPassword', repeatPassword);

        try {
            const response = await axios.post('http://localhost:8080/api/register', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            alert(response.data);
            window.location.href="/login"
            // Handle success, e.g., redirect to another page
        } catch (error) {
            alert('Registration failed: ' + error.response.data);
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
            <form id="register-box" onSubmit={handleSubmit}>
                <label htmlFor="username" id="username-label">Корисничко име</label>
                <br/>
                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} required="true"/>
                <br/>
                <label htmlFor="name" id="name-label">Име</label>
                <label htmlFor="surname" id="surname-label">Презиме</label>
                <br/>
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} required="true"/>
                <input type="text" name="surname" id="surname" onChange={(e) => setSurname(e.target.value)}required="true"/>
                <br/>
                <label htmlFor="password" id="password-label">Лозинка</label>
                <label htmlFor="repeatPassword" id="confirm-label">Потврди лозинка</label>
                <br/>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}required="true"/>
                <input type="password" name="repeatPassword" id="confirm" onChange={(e) => setRepeatPassword(e.target.value)} required="true"/>
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