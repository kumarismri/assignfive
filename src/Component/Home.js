import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            {/* <nav classNameName="navbar navbar-dark bg-primary"> */}
            <nav className="nav nav-pills nav-justified navbar navbar-dark bg-primary">
  <Link to="/home" className="nav-item nav-link text-dark " >Home</Link>
  <Link to="/student" className="nav-item nav-link text-dark" >Students</Link>
  <Link to="/contact" className="nav-item nav-link text-dark" >Contact Us</Link>
  {/* <a className="nav-item nav-link disabled" >Disabled</a> */}
</nav>

{/* </nav> */}
        </div>
    )
}

export default Home