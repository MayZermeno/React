// import item from "./item";
import React from "react";
import Item from "../Item/Item";



const ItemList = ({ productos, titulo }) => {
    return (
     
           
            <div className="container mt-5">
                     <h2 className="titulo-productos">{titulo}</h2>
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
               

                    {productos.map((prod) => 
                    
                    {
                        return(  
                            <div key={prod.id} className="col"> <Item producto={prod}  /></div>
                           )
                    }
                 
                    )}
                </div>
            </div>
        

    )
}

export default ItemList;