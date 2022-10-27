import React , {useState} from "react";


// export default function App(){
//     const [Nom , setNom] = useState('') ;
     
//     function AfficherNom(e){
//         e.preventDefault() ;
//         alert('Le nom a ete soumit : ' + Nom ) ;
//     }
//     return(
//         <form onSubmit={AfficherNom}>
//         <label>
//         Nom :
//         </label>
//         <input type='text' value={Nom} onChange={(e) =>setNom(e.target.value )} />
//         <input type='submit'  />
//         </form>

//     )
// }




// import React,{useState} from 'react';




// const App = () => {
//   const [Message, setMessage] = useState('');

  
//   const AfficherMessage = (e) => {
//     e.preventDefault() ;
//     alert(Message) ;
//   }

//   return (
//     <div className='container border border-4 mt-5 fst-italic pb-5'>
//     <form onSubmit={AfficherMessage}>
//       <label className='mt-2' >Entrer votre commentaire :</label><br/>
//       <textarea
//         id="Message"
//         name="Message"
//         className='form-control'
//         value={Message}
//         onChange={(event) =>  setMessage(event.target.value)}
//       />
//       <br/>
//       <button className='mt-2 btn btn-outline-success'>
//       Entrer
//       </button>
//     </form>
//     </div>
    
//   );
// };




function Box(props) {
    const [checked, setChecked] = useState();
    
    
    return (
        
        <div key={props.index}>
        <input value={props.item} type="checkbox" onChange={(e) => setChecked(e.target.checked) }/>
        <span>{props.item}</span>
      </div>

        
        
         

    );



}

function App(){
    const Tableau = ["Element 1", "Element 2", "Element 3", "Element 4"];
    function AfficherChangement(e){
        e.preventDefault() ;
        

    }
    return(
        <form onSubmit={AfficherChangement} >
        <div>
        {Tableau.map((item, index) => (
            <Box index = {index} item = {item} ></Box> 
            ))}
        </div>
        <button>
        Entrer
        </button>
        
        </form>
    )


}


export default App;
