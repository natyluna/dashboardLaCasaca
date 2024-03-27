import React from 'react';
import SmallCard from './SmallCard';
import { useProduct } from '../hooks/useProducts';
import { useUser } from '../hooks/useUsers';


function ContentRowTop(){

const {count}= useProduct();
const {countUs}= useUser();
const {countByCategory} = useProduct(); 

let useInDataBase = {
    color:   "primary",
    titulo: "Total de Usuarios",
    valor: countUs,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total de Equipos",
    valor: Object.keys(countByCategory).length,
    icono: "fas fa-futbol",
}

let amount ={
color:   "success",
titulo: "Total de Productos",
valor: count,
icono: "fas fa-tshirt",
}


    let cardProps = [useInDataBase,amount,user];
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;