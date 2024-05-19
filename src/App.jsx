import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componente de Prueba 
import Componente from './components/Componente/Componente';

function App() {

  useEffect(()=>{
    document.body.style.backgroundColor = "#330000"; // Cambia el color '#213547'  naranja: #ff5733
  }, [])

  return (
    <>
      <BrowserRouter>
      
      <div className="position-absolute top-0 start-0" style={{ width: "100%", height: "100px", background:"Black", border: '1px solid red' }}>
        <div className='mt-3 col'>   
        <NavBar />
        </div>
      </div>
      
      <h1 className='position-absolute start-0 tipografia' style={{top:150, marginLeft:26, color: "white"}}>Nuevos Productos y lanzamientos</h1>
      
      <ItemListContainer />

      <Routes>   

        {/* <Route exact path='/' element={<App />} /> */}
        <Route exact path='/componente' element={<Componente />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
