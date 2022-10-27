// import React , {useReducer} from "react";



// const reducer = (state,action) => {
//     if(action.type == 'MotDePasse'){
//         const event = action.payload ;
//         return (

//             {ValeurMotDePasse : event.target.value }
//         ) ;
//     }else{
//         return state ;
//     }

// }


// export default function MotDePasse(){
    
//     const [state , dispatch] = useReducer(reducer , {ValeurMotDePasse : ''})
//     return(
//         <div className="container mt-5 border border-4 p-5">
//         <fieldset>
//         <legend>
//         Mot de passe
//         </legend>
        
//         <div className="row pt-4">
//         <div className="col-3 col-lg-4 col-sm-6">
//         <label>
//         Taper votre mot de passe :
//         </label>
//         </div>
//         <div className="col col-sm-6 col-lg-4">
//         <input  className="form-control"  type = 'text' 
//         onChange={event => {dispatch({type : 'MotDePasse' , payload: event})}}
//         />
//         </div>
//         </div>
//         <div>
        
//         {state.ValeurMotDePasse == '' || state.ValeurMotDePasse.length >= 4  ? '' : 'Password doit avoir au moins de 4 caractères' }

//         </div>

        
       
       
     
//         </fieldset>    
        
//         </div>
//     );
// }





// ---------------------------------------------- Use State --------------------------------------




// import React , {useState} from "react";


// export default function MotDePasse(){
    
//     const [ValeurMotDePasse , ChangerMotDePasse] = useState('') ;
//     return(
//         <div className="container mt-5 border border-4 p-5">
//         <fieldset>
//         <legend>
//         Mot de passe
//         </legend>
        
//         <div className="row pt-4">
//         <div className="col-3 col-lg-4 col-sm-6">
//         <label>
//         Taper votre mot de passe :
//         </label>
//         </div>
//         <div className="col col-sm-6 col-lg-4">
//         <input  className="form-control"  type = 'text' 
//         onChange={(e) =>{ ChangerMotDePasse(e.target.value)}}
//         />
//         </div>
//         </div>
//         <div>
        
//         {ValeurMotDePasse == '' || ValeurMotDePasse.length >= 4  ? '' : 'Password doit avoir au moins de 4 caractères' }

//         </div>

        
       
       
     
//         </fieldset>    
        
//         </div>
//     );
// }