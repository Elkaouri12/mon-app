
const MonVoiture = {Matricule : '19873X9' ,
        Marque : 'Toyota' ,
        Chevaux : 8
}
export default function Voiture () {


return(
    <div>
    <h1 style={{color : 'green'}}>
    Information voiture 
    </h1>
    <h4>
    Voiture matricule : <span> {MonVoiture.Matricule} </span> 
    </h4>
    <h5>
    Marque : {MonVoiture.Marque} nombre de chevaux : {MonVoiture.Chevaux}
    </h5>
    </div>
) ;

}



    
// export default class Voiture extends Component {
    
//     render() {
//         return(
//             <div>
//             <h1 style={{color : 'green'}}>
//             Information voiture 
//             </h1>
//             <h4>
//             Voiture matricule : <span> {MonVoiture.Matricule} </span> 
//             </h4>
//             <h5>
//             Marque : {MonVoiture.Marque} nombre de chevaux : {MonVoiture.Chevaux}
//             </h5>
//             </div> ) ;
//     }
// }