import React , {useState , useEffect } from 'react' ;




const Formulaire = () => {

    // useEffect(() =>
    //     {
    //         alert(Nom + ' ' + Prenom) ;
    //     } ,
    //     []
    // )

    const Afficher = () => {
        alert(Nom + ' ' + Prenom) ;
    }

    const [Nom , setNom] = useState() ;
    const [Prenom , setPrenom] = useState() ;




    return(
     <div>
     <div>
     <h1>
    Formulaire Inscription 
    </h1>
     </div>
     <div>
     <label>
     Nom :
     </label>
     <input value={Nom} type = 'text' onChange={(Event) => {setNom(Event.target.value)}} />
     <br/>

     <label>
     Prenom :
     </label>
     <input value={Prenom} type = 'text' onChange={(Event) => {setPrenom(Event.target.value)}} />
     <br/>
     <button onClick={Afficher} >
     Submit 
     </button>
     </div>
    
        
    </div>
    );

}

export default Formulaire ;