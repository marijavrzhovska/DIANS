import './search.css'
import logo from '../pictures/logo.jpg'
import reserved from '../pictures/reserved.png'
import gmail from '../pictures/gmail.png'
import {Link} from 'react-router-dom'
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api'
const libraries=['places'];
const mapContainerStyle = {
    width: '104vh',
    height: '104vh',
}
const center = {
    lat: 41.6086,
    lng: 21.7453,
}
const Search = () =>{
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
        <div id="filters">
            <form id="form">
                <label htmlFor="name">Име</label>
                <input type="text" id="name"/>
                <label htmlFor="city">Град</label>
                <input type="text" id="city"/>
                <button>Барај</button>
            </form>
            <div id="results">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque aut dicta dolor
                    enim fugiat ipsam magnam repellat, repudiandae! Accusamus amet dolore, eius mollitia nisi nobis qui
                    sed similique.</p>
            </div>
        </div>
            <div id="map">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}>
                    <MarkerF position={{
                        lat:41.2852,
                        lng:21.7835,
                    }}/>
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