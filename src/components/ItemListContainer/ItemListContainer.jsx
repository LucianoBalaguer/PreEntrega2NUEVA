import ProductOnly from "./ProductOnly/ProductOnly"
import { useEffect, useState } from "react"
import { getBooks, getProducts } from "../../array";

export default function ItemListContainer(){

    //useState de la Promise
    const [product, setProduct]= useState([]); //se le pasa un array vacio con []
    //useEffect de la Promise
    useEffect(()=>{
        getProducts.then((producto)=>{
            setProduct(producto)
        })
    },[getProducts])//aca el useEffect va a renderizarse si el array mio se modifica

    const [books, setBooks]= useState([]);

    useEffect(()=>{
        getBooks("https://api.itbook.store/1.0/new").then((datosRecibidos)=> setBooks(datosRecibidos.books))
    },[])

    // https://api.itbook.store/1.0/new

    return (<>
        
        {/* El MAPEO del promise */}
        {/* {product.map((producto)=> (
            <ProductOnly key={producto.id} title={producto.title}/>
        ))} */}


        <div style={{marginTop:200}}>
        {books.reduce((rows, product, index) => {
            if (index % 4 === 0) rows.push([]);
            rows[rows.length - 1].push(product);
            return rows;
        }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="row g-3 mb-3" style={{ marginTop: 40}}>
                {row.map((producto, colIndex) => (
                    <div key={colIndex} className="col"><ProductOnly title={producto.title} img={producto.image} price={producto.price} /></div>
                ))}
            </div>
        ))}
        </div>
        

        {/* El MAPEO del fetch */}
        {/* {books.map((book)=>(
            <ProductOnly title={book.title}/>
        ))} */}
        


        {/* <div className="row g-3 mb-2" style={{marginTop:50}}>
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
            
        </div>
        <div className="row g-3">
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
            <div className="col"><ProductOnly/></div>
        </div> */}
    
    </> )
}


