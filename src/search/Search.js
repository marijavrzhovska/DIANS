import './search.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import user from '../pictures/user.png'
import {Link} from 'react-router-dom'
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api'
import {useEffect, useState} from "react";
import axios from "axios";
const libraries=['places'];
const mapContainerStyle = {
    width: '104vh',
    height: '800px',
}
const center = {
    lat: 41.6086,
    lng: 21.7453,
}
const Search = () =>{
    const [city,setCity] = useState('')
    const [name,setName] = useState('')
    const [wineries,setWineries] = useState([]);
    const handleSubmit = event => {
        event.preventDefault();
        if (name) {
            fetch(`http://localhost:8080/api/name/${name}`)
                .then(response => response.json())
                .then(data => {
                    setWineries(data);
                });
        } else if (city) {
            fetch(`http://localhost:8080/api/city/${city}`)
                .then(response => response.json())
                .then(data => {
                    setWineries(data);
                });
        }
    };
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
    useEffect(() => {
        fetch('http://localhost:8080/api/all')
            .then(response => response.json())
            .then(data => {
                setWineries(data);
            });
    }, []);
    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDaqcuqPLMXH1NOKt3fkYpdJb4tmttxfP8',
        libraries,
    })
    if(loadError){
        return <div>Error loading maps</div>
    }
    if(!isLoaded){
        return <div>Loading maps</div>
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
        <div id="main">
        <div id="filters">
            <form id="form">
                <label htmlFor="name">Име</label>
                <input type="text" id="name" value={name} onChange={event=>setName(event.target.value)}/>
                <label htmlFor="city">Град</label>
                <input type="text" id="city" value={city} onChange={event=>setCity(event.target.value)}/>
                <button onClick={handleSubmit}>Барај</button>
            </form>
            <div id="results">
                {wineries.map(winery => (
                    <div key={winery.id} className="winery-result">
                        <p>Име: {winery.name}</p>
                        <p>Град: {winery.city}</p>
                        <Link to="/winery"
                            state={{
                                id: winery.id,
                                lng: winery.longitude,
                                lat: winery.latitude,
                            }}>Посети</Link>
                    </div>
                ))}
            </div>
        </div>
            <div id="map">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={9}
                    center={center}>
                    {wineries.map(winery => (
                        <MarkerF position={{
                            lat: winery.latitude,
                            lng: winery.longitude,
                        }}></MarkerF>
                    ))}
                </GoogleMap>
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