import React from "react" ;
import Header from './Header'
import Section from "./Section";
import Cards from "./Cards" ;
import Footer from './Footer'

const Articles = [
    
    {
       
        Titre : 'Fancy Product' ,
        Prix : '$80.00',
        Solde : false ,
        PrixSolde : null  
    },
    {
       
        Titre : 'Special Item' ,
        Prix : '$20.00',
        Solde : true ,
        PrixSolde : '$18.00'
    },
    {
    
        Titre : 'Sale Item' ,
        Prix : '$50.00',
        Solde : true ,
        PrixSolde : '$25.00'

    },
    {
    
        Titre : 'Populare Item' ,
        Prix : '$40.00' ,
        Solde : false ,
        PrixSolde : null 

    }
]




export default function App(){

return(
    <div className="container">
    <Header />
    <Section/>
    <div className="d-flex justify-content-between p-5">
    {Articles.map((e) => {
        return <Cards Articles = {e}/>
    })}
    </div>
    
    <Footer />
        
    </div>
)

}



