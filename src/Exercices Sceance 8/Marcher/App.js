import React , {useState}  from "react" ;
import BarRecherche from "./BarRecherche" ;
import ListeRésultats from "./ListeRésultats" ;

const list=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"légume"},
    {nom:"carotte",type:"légume"},
    {nom:"pomme de terre",type:"légume"},
    {nom:"navet",type:"légume"},
    {nom:"poivron",type:"légume"}
] ;



export default function App(){

const [Résultats , MetRésultats] = useState([]) ;
const [Recherche , MetRecherche] = useState(false) ;
const [Cat , Change] = useState()
function ChercherSubmit(e){
        
        MetRésultats(list.filter((Element) => Element.type == e )) ;
        MetRecherche({Recherche : true}) ;
        Change(e)
    }
    return (
        <div className="container mt-5 border border-4 p-5">
        <BarRecherche ChercherSubmit = {ChercherSubmit} />
        
        {   
        Recherche ? Cat : ''}
        {Recherche ? 
         <ListeRésultats  Résultats = {Résultats}/> : ''}
        </div>
    ) ;
}
