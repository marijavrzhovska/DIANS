import './search.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";
const Search = () =>{
    const [city,setCity] = useState('')
    const [name,setName] = useState('')
    const [nameMessage,setNameMessage] = useState('')
    const [cityMessage,setCityMessage] = useState('')
    const [wineries,setWineries] = useState([]);
    const handleSubmit = event => {
        event.preventDefault();
        if (name) {
            setNameMessage(`${name}`);
            fetch(`http://localhost:8080/api/name/${name}`)
                .then(response => response.json())
                .then(data => {
                    setWineries(data);
                });
        } else if (city) {
            setCityMessage(`${city}`);
            fetch(`http://localhost:8080/api/city/${city}`)
                .then(response => response.json())
                .then(data => {
                    setWineries(data);
                });
        }
    };

    useEffect(() => {
        fetch('http://localhost:8080/api/all')
            .then(response => response.json())
            .then(data => {
                setWineries(data);
            });
    }, []);
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
        <div id="filters">
            <form id="form">
                <label htmlFor="name">Име</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <label htmlFor="city">Град</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                />
                <button onClick={handleSubmit}>Барај</button>
            </form>
            <div id="results">
                {wineries.map(winery => (
                    <div key={winery.id} className="winery-result">
                        <p>Име: {winery.name}</p>
                        <p>Град: {winery.city}</p>
                        {/*<button onClick={() => navigateToWinery(winery.id)}>*/}
                        {/*    Повеќе информации*/}
                        {/*</button>*/}
                    </div>
                ))}
            </div>
        </div>
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
export default Search;