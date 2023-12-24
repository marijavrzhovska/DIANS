import './about_us.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import background from '../pictures/background.jpg'
import {Link} from "react-router-dom";
const About_Us = () => {
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
            <div id="about_us">
                <h2>Кои сме ние?</h2>
                <p>Ние сме група студенти, кои студираат на Факултетот за информатички науки и компјутерско инженерство,
                    лоциран во градот Скопје.</p>
                <h2>Целта на системот</h2>
                <p>Целта на системот е да биде интегрирана во Google Maps за да се пребарува одредена винарија во
                    терироријата на Македонија. Мапата треба да покажува геолокација, како и општи информации за
                    пребараната
                    винаријата. Дополнително, може да се напише коментар и да се остави оценка за секоја винарија.</p>
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
export default About_Us;