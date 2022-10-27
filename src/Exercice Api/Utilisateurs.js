import React , {useEffect , useState} from 'react' ;
import Utilisateur from './Utilisateur' ;




const Utilisateurs = () => {
    const [Utilisateur_2,setUtilisateur] = useState([]) ;
    useEffect(() => {
        const GetInfo = async () => {
            const Reponse = await  fetch('https://jsonplaceholder.typicode.com/users') ;
            const Utilisateur = await Reponse.json() ; 
            setUtilisateur(Utilisateur) ;
        }
        GetInfo()
    }, [] )
    
    return (
        <div className='bg bg-success mt-5 border border-3 rounded-3 '>
        <div className='pt-3'>
        <h1 className='ms-4'>
        Nombre d'Utilisateurs :  {Utilisateur_2.length}
        </h1>
        </div>
        <div>
        { 
            Utilisateur_2.map((e) => <Utilisateur  Utilisateur = {e}/> )
        }
        </div>
        </div>
        
        
    ); 



}

export default Utilisateurs ;