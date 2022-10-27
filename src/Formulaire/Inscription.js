import React , {useState} from 'react' ;
// import * as fs from 'react-fs' ;


const Option = [
    {
        Ville : 'Casablanca' ,

    },
    {
        Ville : 'Agadir' 
    },
    {
        Ville : 'Tanger' 
    }
]

const Inscription = () => {
    
    const ValiderInfo = (e) => {
        e.preventDefault() ;
       const fs = require('fs/promises');
        fs.appendFile('./Utilisateurs.txt' , Identifiant + ' ' + MotDePasse , (err) => {
            if(err) throw err ;
            console.log("completed !")
        } ) ;


    }
    
    const [Identifiant , setIdentifiant] = useState() ;
    const [MotDePasse , setMotDePasse] = useState() ;
    
    // const [DNS , setDNS] = useState() ;
    // const [Ville , setVille] = useState() ;
    // const[Genre , setGenre] = useState() ;
    // const[Loisirs , setLoisirs] = useState() ;

    return (
        <div className='container'>
        <form onSubmit={ValiderInfo}>
        <div>
        <h1>
        Inscription
        </h1>
        </div>
        <div>
        <table>
        <tr>
        <td>
        <label>
        L'identifiant
        </label>
        </td>
        <td>
        <input type='text' onChange={(Event) => setIdentifiant(Event.target.value) }/>
        </td>
        </tr>
        <tr> 
        <td>
        <label>
        Mot de passe 
        </label>
        </td>
        <td>
        <input type='text' onChange={(Event) => setMotDePasse(Event.target.value) }/>
        </td>
        </tr>
        <tr>
        <td>
        <label>
        Date de naissance  
        </label>
        </td>
        <td>
        <input type='date' />
        </td>
        </tr>
        <tr>
        <td>
        <label>
        Ville  
        </label>
        </td>
        <td>
        <select>
        {
            Option.map((Valeur , Index) => {
                return <option key = {Index + 1} value = {Index + 1 } > {Valeur.Ville} </option>  
            }

            )
        }
        </select>
        </td>
        </tr>
        <tr>
        <td>
        <label>
        Genre  
        </label>
        </td>
        <td>
        <input type='radio' name='Genre' />
        <label> Homme </label>
        </td>
        <td>
        <input type='radio' name='Genre' />
        <label> Femme </label>
        </td>
        </tr>
        <tr>
        <td>
        <label>
        Loisirs  
        </label>
        </td>
        <td>
        <input type='checkbox' name='Loisirs' />
        <label> Sport </label>
        </td>
        <td>
        <input type='checkbox' name='Loisirs'/>
        <label> Lecture </label>
        </td>
        <td>
        <input type='checkbox' name='Loisirs' />
        <label> Musique </label>
        </td>
        </tr>
        <tr>
        <td>
        <label>
        Photo  
        </label>
        </td>
        <td>
        <input type='file' />
        </td>
        </tr>
        <tr>
        <td>
        <button>
        S'inscrire
        </button>
        </td>
        </tr>
        </table>
        </div>
        </form>
        </div>
    )
}

export default Inscription ;