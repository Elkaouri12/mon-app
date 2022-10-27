import React from "react";
import {Card,Button} from "react-bootstrap";



const Style = {width : '260px' , height : '190px'}

const Produit = props => {
    return(
        <div id =  {props.id}>
        
            <Card >
                <Card.Body>
                <img src={props.Image} style = {Style} />
                <Card.Subtitle>
                    {props.Titre}
                </Card.Subtitle>
                <Card.Text>
                    {props.Prix}
                </Card.Text>
                <Button variant="outline-secondary">
                    Ajouter au panier     
                </Button>
                </Card.Body>
              
                

            </Card>
        </div>

);


}

export default Produit ;