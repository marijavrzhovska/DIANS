import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <body>
        <div id="link">
            <Link to="/list">See List</Link>
        </div>
        </body>
    )
}
export default Home