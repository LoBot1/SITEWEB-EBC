import { useRef, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactSession } from 'react-client-session';
import { Sign_out } from "../page/sign_out";
import '../style/navbarblack.css'
import Iconlogout from "./icon/iconlogout";
import IconBakset from "./icon/iconbasket";
import IconBasketBlack from "./icon/iconbasketblack";
import Iconlogoutblack from "./icon/iconlogoutblack";


// npm install react-icons
function NavBarBlack(props) {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="Navbar">
                <nav ref={navRef}>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>


                    
                    <ul>
                        <li>
                            <a className="nav" href="/all_reservation_list">Les Camps</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="nav" href="/home">Elite Basket Camp</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="nav" href="/profil_user">Mon profil</a>
                        </li>
                    </ul>
                    <ul>
                        {ReactSession.get("coach") && ReactSession.get("coach") == 1 &&
                            <li>
                                <a className="coach nav" href="/profil_coach">coach</a>
                            </li>
                        }
                    </ul>
                    <ul>
                        {ReactSession.get("admin") && ReactSession.get("admin") == 1 &&
                            <li>
                                <a className="admin nav" href="/ad_home">admin</a>
                            </li>
                        }
                    </ul>

                    <div className="bag-nav">
                        {ReactSession.get("login") && ReactSession.get("login") == 1 ?
                            <ul>
                                <li>
                                    <a className="nav" href="" onClick={() => Sign_out()}><Iconlogoutblack /></a>
                                </li>
                            </ul>
                            :
                            <div className="loginsign">
                                <ul>
                                    <li>
                                        <a className="nav" href="/login">login</a>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <a className="nav" href="/sign_up">sign_up</a>
                                    </li>
                                </ul>

                            </div>

                        }
                        <ul>
                            <li>
                                <a className="nav" href="/bag"><IconBasketBlack /></a>
                            </li>
                        </ul>
                    </div>

                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>


    );
}


export default NavBarBlack;