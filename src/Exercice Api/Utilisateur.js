import React , {useState , useEffect} from 'react' ;

import Posts from './Posts' ;



const Utilisateur = (props) => {
    const [Post_2 , setPost] = useState([]) ;
    const [Details , setDetails] = useState(false) ;


    useEffect(() => {
        const GetInfo = async () => {
            const Reponse = await  fetch('https://jsonplaceholder.typicode.com/posts') ;
            const Post = await Reponse.json() ; 
            setPost(Post) ;
        }
        GetInfo();
    }, [] )


 const AfficherDetails = () => {
    setDetails(true) ;

   
 }

return (
    <div key={props.Utilisateur.id} className='bg-success bg-gradient border border-3 p-3 border border-dark rounded-3 m-3'>
    <div>
    <p className='ms-3'>
    Nom : {props.Utilisateur.name} <br/>
    Email : {props.Utilisateur.email} <br/>
    Ville : {props.Utilisateur.address.city} <br/>
    Rue : {props.Utilisateur.address.suite}
    </p>
    </div>
    <div>
    <button onClick={AfficherDetails} className="btn btn-light ms-3">
    Details posts 
    </button>
    </div>
    <div>
    {Details ?  Post_2.map((e) => <Posts  Post = {e}/> ) : ''}
    </div>
    </div>

);


}

export default Utilisateur ;