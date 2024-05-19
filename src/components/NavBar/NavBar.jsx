import "./NavBar.css"
import Titulo from "./Titulo"
import Sections from "../Sections/Sections"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';



export default function NavBar(){
    return (
        <> 
        <div className="container-fluid">
        <div  className="row">
            <div className="col-2 ms-3 mt-3">
                <Titulo/>
            </div>
        
            <div className="col">
                <Sections nombre1="Hombres" nombre2="Mujer" nombre3="Chicos"/>
            </div>

            <div className="col me-5 mt-1">
                <div className="cart-container">
                    <CartWidget/>   
                </div>
            </div>

            <button>
            
            <Link to={"/componente"}>boton</Link>
            
            </button>

        </div>
        </div>
        </> 
    )
}