import React , {useState} from 'react' ;



const [Identifiant , setIdentifiant] = useState() ;
const [MotDePasse , setMotDePasse] = useState() ;



const Login = () => {
    return (
        <div className='container'>
        <form>
        <div>
        <h1> Connexion  </h1>
        </div>
        <div>
        <label>
        L'identifiant
        </label>
        <br/>
        <input type='text'  />
        </div>
        <div>
        <label>
        Mot de passe 
        </label>
        <br/>
        <input type='text ' />
        </div>
        <div>
        <button>
        Se connecter 
        </button>
        </div>
        <div>
        <a> Lien </a>
        </div>
        </form>
        
        </div>
    );
}

export default Login ;