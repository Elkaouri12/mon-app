import React , {useState} from "react";



export default function Inscription() {
    
    const [Nom , ChangerNom] = useState() ;
    const [Prenom , ChangerPrenom] = useState() ;
    const [Information , ChangerInformation] = useState() ;
    
    function AfficherInformation(){
        ChangerInformation(<h5 className="mt-4"> Bonjour  {Nom}  {Prenom} </h5>) ;
    }

    return(
        <div className="container mt-5 border border-4 p-5">
        <fieldse>
        <legend>
        Inscription
        </legend>
        
        <div className="row pt-4">
        <div className="col-3 col-lg-4 col-sm-6">
        <label>
        Taper votre nom :
        </label>
        </div>
        <div className="col col-sm-6 col-lg-4">
        <input onChange={(e) =>{ ChangerNom(e.target.value) }} className="form-control"  type = 'text' />
        </div>
        </div>

        <div className="row mt-4">
        <div className="col-4 col-lg-4 col-sm-6">
        <label>
        Taper votre Prenom :
        </label>
        </div>
        <div className="col col-lg-4 col-sm-6">
        <input className="form-control" onChange={(e) =>{ ChangerPrenom(e.target.value) }} type = 'text' /> 
        </div>
        </div>
        <div className=" row  mt-4 justify-content-center">
        <div className="col-6 d-grid gap">
        <button className="btn btn-block btn-outline-success  " onClick={AfficherInformation} aria-pressed="true">
        Envoyer 
        </button>
        </div>
        </div>
        <div>
        {Information}
        </div>
        </fieldse>    
        
        </div>
    )
}