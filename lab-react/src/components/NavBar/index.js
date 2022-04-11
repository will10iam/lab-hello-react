import logoIron from "../../../src/assets/images/ironhack-logo-xs.png"
import menu from "../../../src/assets/images/menu-top-xs.png"
import "./styles.modules.css"

function NavBar() {
    return ( 
        <div className="nav">
        <img src={logoIron} alt="Logo"></img>
        <img src={menu} alt="Menu"></img>
        </div>
     );
}

export default NavBar;