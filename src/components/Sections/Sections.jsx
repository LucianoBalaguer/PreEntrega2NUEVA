import "./Sections.css"

export default function Sections({nombre1,nombre2,nombre3}){

function handleClick(nombre){
    console.log(`Ingresaste a la seccion ${nombre}`);
}

    return(
        <>
           <div className="container mt-Personalizado1">

                <div style={{width: 600}} className="row d-flex justify-content-center">

                    <div className="col-4 tipografia2" style={{marginTop: 7, marginLeft:83, color: "#8b0000"}} onClick={() => handleClick(nombre1)}>
                        <h3>{nombre1}</h3>
                    </div>

                    <div className="col-2 tipografia2" style={{marginTop: 7, marginLeft:12, color: "#8b0000"}} onClick={() => handleClick(nombre2)}>
                        <h3>{nombre2}</h3>
                    </div>

                    <div className="col-3 tipografia2" style={{marginTop: 7, marginLeft:55, color: "#8b0000"}} onClick={() => handleClick(nombre3)}>
                        <h3>{nombre3}</h3>
                    </div>
                </div>

            </div>
        </>
    )

}