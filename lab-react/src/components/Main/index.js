import "./styles.modules.css"
import Fundo from "../../../src/assets/images/fundo.png"

function Main() {
    return ( 
        <div className="main">
            <img src={Fundo} alt="Fundo"></img>
            <h1 className="heroText">Say hello to ReactJs</h1>
            <p  className="heroText1">You will learn how to use the most popular frontend library, 
                                      and become a super Ninja developer.</p>
            <button>Awesome!</button>
        
        </div>

     );
}

export default Main;