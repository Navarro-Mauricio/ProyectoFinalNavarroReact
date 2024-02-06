import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
        <Link to="/">
                <img className="w-32 m-4 transition-transform cursor-pointer hover:-rotate-3 scale-100" src="/img/LogoPrincipal.svg" alt="" />
            </Link>

            <nav>
                <ul>
                    <li className="headerTexto ">
                        <NavLink to="/categoria/2">Stickers</NavLink>
                    </li>

                    <li className="headerTexto m-5">
                        <NavLink to="/categoria/3">Posters</NavLink>
                    </li>
                </ul>

            </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar