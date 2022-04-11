import "./styles.modules.css"
import icon1 from "../../../src/assets/images/icon1.png"
import icon2 from "../../../src/assets/images/icon2.png"
import icon3 from "../../../src/assets/images/icon3.png"
import icon4 from "../../../src/assets/images/icon4.png"



function Footer() {
    return ( 
        <div className="footer">
        <ul>
            <li>
                <img src={icon1} alt="Primeiro Icone"></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </li>
            <li>
            <img src={icon2} alt="Segundo Icone"></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </li>
            <li>
            <img src={icon3} alt="Terceiro Icone"></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </li>
            <li>
            <img src={icon4} alt="Quarto Icone"></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p> 
            </li>
        </ul>
        </div>
     );
}

export default Footer;