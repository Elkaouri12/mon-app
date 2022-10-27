import React from "react";

export default function ListeRésultats(props){
    return (
        <div className="container mt-5 border border-4 p-5">
        <div>
        <h3>
        Résultats de recherche 
        </h3>
        </div>
        <div>
        <ul>
        { 
            props.Résultats.map((Clé) => {
                return <li key={Clé.nom}> {Clé.nom} </li>
            })
        }
        </ul>
        </div>
        
        </div>
    )
} 











