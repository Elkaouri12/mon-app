import React from "react";
import Produit from "./Produit";
import Image1 from './Img/Image1.png' ;
import Image2 from './Img/Image2.png' ;
import Image3 from './Img/Image3.png' ;
import Image4 from './Img/Image4.png' ;



const listProduits = [
{
    id : '1' ,
    Titre : 'PC Portable Gamer HP VICTUS',
    Prix : '7490 DH',
    Image : Image1

},
{
    id : '2' ,
    Titre : 'PC Portable Gamer HP VICTUS',
    Prix : '2190 DH',
    Image : Image2

},
{
    id : '3' ,
    Titre : 'Pc Portable Chromebook Acer',
    Prix : '3640 DH',
    Image : Image3

},
{
    id : '4' ,
    Titre : 'PC Portable - HUAWEI',
    Prix : '1270 DH',
    Image : Image4

}

];


const Style = {display : 'flex' , justifyContent :'space-around' , marginTop : '30px'}


const Produits = () => {
    
    return(
        <div style={Style}>
           {
           listProduits.map((e) => {
            return(<Produit id = {e.id} Titre = {e.Titre} Prix = {e.Prix} Image = {e.Image}  />);
        })}
        </div>
           )
    }
               
            
    

export default Produits ;