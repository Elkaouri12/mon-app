import React from "react" ;
import { useState } from "react";


const ArticleFormulaire = () => {
   const [Id , setId] = useState() ;
   const [Designation , setDesignation] = useState() ;
   const [Prix , setPrix] = useState() ;
   

    const AfficherArticles = (e) => {
        e.preventDefault() ;
        let fso=new window.ActiveXObject("Scripting.FileSystemObject")
		/* On crée un fichier. On met true s'il est écrasable, faux sinon. */
fso.CreateTextFile("testfile.txt", true);
		/* Ouverture d'un Fichier; avec Type  = 1 pour ouvrir un fichier en lecture
												2                           écriture
												8                           écriture à la suite
     Créer = true si on crée le fichier quand il n'existe pas, false sinon */
var ts=fso.OpenTextFile("textfile.txt",8,true);
/* Ecriture dans le fichier */		
ts.WriteLine("Salut DVP !");
ts.Write("Coucou"); //Ecriture de "Coucou".
 
 
ts.Close();      
    } 
    return( 
    <div>
    <div>
    <h1>
    Ajouter un articles 
    </h1>
    </div>
    <div>
    <label>
    Id : 
    </label>
    <input  value={Id} onChange = {(Event) => { setId(Event.target.value) }}   />
    </div>
    <div>
    <label>
    Designation : 
    </label>
    <input  value={Designation}  onChange = {(Event) => { setDesignation(Event.target.value) }} />
    </div>
    <div>
    <label>
    Prix :  
    </label>
    <input  value={Prix}  onChange = {(Event) => { setPrix(Event.target.value) }} />
    </div>
    <div>
    <button onClick={AfficherArticles}>
    Ajouter
    </button>
    </div>
    </div>
    );



}

export default ArticleFormulaire ;