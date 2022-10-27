import React from "react";

import styled from "styled-components";





export default function Cards(props){
    
     
    return (
        <div className="card m-lg-4 m-sm-1" >
        <img src="Img-2/450x300.png" className="card-img-top" alt="..." />
        
       { props.Articles.Solde ? <span className="badge bg-dark position-absolute top-0 end-0 mt-2 me-1">Sale</span> : '' } 
        

       
      

        <div className="card-body">

          <h5 className="fs-sm-6  text text-center">{props.Articles.Titre}</h5>
          <p className="card-text fs-6 text text-center ">
          {props.Articles.Solde ? <del> {props.Articles.Prix} </del> : props.Articles.Prix}
          {props.Articles.Solde ? props.Articles.PrixSolde : '' }
          </p>
        <div className="text text-center fs-6">
        <a href="#" className="btn btn-outline-dark text text-center">Add to cart</a>

        </div>
        </div>
      </div>
        
    );

}