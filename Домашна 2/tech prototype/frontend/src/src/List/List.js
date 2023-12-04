import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './List.css'

const List = () => {
    const [city,setCity] = useState('')
    const [name,setName] = useState('')
    const [nameMessage,setNameMessage] = useState('')
    const [cityMessage,setCityMessage] = useState('')
    const [wineries,setWineries] = useState([]);
    const handleNameSubmit = event => {
        event.preventDefault()
        setNameMessage(`${name}`)
        fetch(`http://localhost:8080/api/name/${name}`)
            .then(response => response.json())
            .then(data => {
                setWineries(data);
            })
        return (
            <body>
            <div id="">
                {wineries.flatMap(winery => (
                    <div className="bracket">
                        <p>Id: {winery.id}</p>
                        <p>Name: {winery.name}</p>
                        <p>Surname: {winery.surname}</p>
                        <p>Age: {winery.age}</p>
                        <p>City: {winery.city}</p>
                    </div>
                ))}
            </div>
            </body>
        )
    }
    const handleCitySubmit = event => {
        event.preventDefault()
        setCityMessage(`${city}`)
        fetch(`http://localhost:8080/api/city/${city}`)
            .then(response => response.json())
            .then(data => {
                setWineries(data);
            })
        return (
            <body>
            <div>
                {wineries.flatMap(winery => (
                    <div className="bracket">
                        <p>Id: {winery.id}</p>
                        <p>Name: {winery.name}</p>
                        <p>Surname: {winery.surname}</p>
                        <p>Age: {winery.age}</p>
                        <p>City: {winery.city}</p>
                    </div>
                ))}
            </div>
            </body>
        )
    }
    useEffect(()=> {
        fetch('http://localhost:8080/api/all')
            .then(response => response.json())
            .then(data => {
                setWineries(data);
            })
    }, []);
    return (
        <body>
        <div id="link">
            <Link to="/">Go Home</Link>
        </div>
            <div id="container">
            <form onSubmit={handleNameSubmit}>
                <p>Име: </p>
                <input type="text" name="name" onChange={event => setName(event.target.value)} value={name}/>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleCitySubmit}>
                <p>Град: </p>
                <input type="text" name="city" onChange={event => setCity(event.target.value)} value={city}/>
                <button type="submit">Submit</button>
            </form>
            </div>
            <div id="name">
                <h2>Име: {nameMessage}</h2>
            </div>
            <div id="city">
                <h2>Град: {cityMessage}</h2>
            </div>
        {wineries.map(winery => (
            <div className="bracket">
                <p>Име: {winery.name} Град: {winery.city}</p>
                <p>Адреса: {winery.street} ({winery.latitude} {winery.longitude}) </p>
                <p>Работно време: {winery.workHours}</p>
                <p>Контакт број: {winery.phone}</p>
                <p>Вебстрана: <a href={winery.website}>{winery.website}</a></p>
                <p>Опис: {winery.description}</p>
            </div>
        ))}
        </body>
    )
}
export default List;