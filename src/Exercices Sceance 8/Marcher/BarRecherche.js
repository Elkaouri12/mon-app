import { useState } from "react";



export default function BarRecherche(props){
    function ChercherSubmit(e){
        e.preventDefault() ;
        props.ChercherSubmit(ValeurCatégorie) ;
    }
    const [ValeurCatégorie , MetCatégorie] = useState('') ;
    return (
        <div className="container mt-5 border border-4 p-5">
        <form onSubmit={(e) => ChercherSubmit(e) }>
        <fieldse>
        <legend>
        <h3>
        Market !
        </h3>
        </legend>
        
        <div className="row pt-4">
        <div className="col-3 col-lg-4 col-sm-7">
        <label>
        Taper la catégorie de produit :
        </label>
        </div>
        <div className="col col-sm-5 col-lg-4">
        <input value={ValeurCatégorie}  className="form-control" onChange={(e) => {MetCatégorie(e.target.value)}}  type = 'text' />
        </div>
        </div>

        
        <div className=" row  mt-4 justify-content-center">
        <div className="col-6 d-grid gap">
        <input type='submit' className="btn btn-block btn-outline-success  "  />
        
       
        </div>
        </div>
        </fieldse>
        </form>
        
        </div>
    )





}