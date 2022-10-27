import React , {Component} from "react";
import { Button , Container } from "react-bootstrap";


class Jeu extends Component {
    constructor(props){
        super(props) ;
        this.state = {
        Face : null ,
        Essai : 0 ,
        Fin : false ,
        Button :  <button  className="btn btn-outline-success" onClick={() => this.Jouer()}> Jouer </button> 
    }
    }
    Jouer(){ 
        let Change = () => {
            this.setState({
                Face : Val ,
                Essai : this.state.Essai + 1 ,
                });
        }
        let Val = Math.floor(Math.random() * 6) + 1  ;
        console.log(Val) ;
        if( String(Val) == this.props.Cach){
            Change() ;
            this.setState({Fin : true ,
                 Button : <button className="btn btn-outline-success" onClick={() => this.initialiser()}>Initialiser</button>
                });
        }else{
            Change() ;
        }
        }
    getImage() {

        for(let i = 0 ; i <= 6 ; i++ ){
            if(this.state.Face == i){
                return('./Img/Face' + i + '.png')
            }
        }

    }
    initialiser(){
        this.setState({ Face:null,
            Essai: 0,
            Button :  <Button  className="btn btn-outline-success" onClick={() => this.Jouer()}> Jouer </Button> ,
            Fin : false
        });
    }
        
    render(){
       return(
        <Container className="border border-4 mt-5 fst-italic pb-5 ">
        <h1 className="d-flex justify-content-center">
        Master Jeu : 
        </h1>
        <h2>
        Face : {this.state.Face} 
        </h2>
        <h2>
        Nombre d'assais :  {this.state.Essai} 
        </h2>
       
        {this.state.Button}
        <br />    
        <img className="mt-3" src= {this.getImage()} style={{width : 150 , height : 150}} />
        {this.state.Fin && <div><p>Bravo vous avez trouvez la Face cachée.....</p> </div>  }
        </Container>
       );

    }

}



export default Jeu ;