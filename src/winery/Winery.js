import './winery.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import {Link, useLocation} from 'react-router-dom'
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api'
import {useEffect, useState} from "react";
const libraries=['places'];
const mapContainerStyle = {
    width: '104vh',
    height: '800px',
}
const Winery = () =>{
    const location = useLocation();
    const [city,setCity] = useState('')
    const [name,setName] = useState('')
    const [wineries,setWineries] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/name/${location.state.name}`)
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
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Најава</Link>
                </li>
            </ul>
        </div>
        <div id="main">
            {wineries.flatMap(winery => (
                <div id="desc">
                    <p>Име: {winery.name} Град: {winery.city}</p>
                    <p>Адреса: {winery.street}</p>
                    <p>Работно време: {winery.workHours}</p>
                    <p>Контакт број: {winery.phone}</p>
                    <p>Вебстрана: <a href={winery.website}>{winery.website}</a></p>
                    <p>Опис: {winery.description}</p>
                </div>
            ))}
            <div id="map">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={15}
                    center={{
                        lat: parseFloat(location.state.lat),
                        lng: parseFloat(location.state.lng),
                    }}>
                    <MarkerF position={{
                        lat: parseFloat(location.state.lat),
                        lng: parseFloat(location.state.lng),
                    }}></MarkerF>
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
export default Winery;