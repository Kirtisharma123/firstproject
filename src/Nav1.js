import { Link } from 'react-router-dom'
// import './nav.css'
import Kirti from './image/images.jpeg'
function Nav1(){
    return(
        <>
        <h1 style={{color:'blue',backgroundColor:'red'}}>Hellii</h1>
        <h2 >hello</h2>
        <ul>
            <Link to ='/'><li>Home</li></Link>
            <Link to ='/About'><li>About</li></Link>
            <Link to ='/Contact'><li>Contact</li></Link>
            <img src={Kirti} alt='hgg'></img>
            <Link to ='/Props'>Product</Link>

        </ul>
        </>
    )
}
export default Nav1