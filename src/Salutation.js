import React from 'react'
export default class Salutation extends React.Component{
render(){
console.log(this.props)
return ( 
<div >
<h2>Salut {this.props.nom} {this.props.prenom}</h2>
<hr/>
</div>)
}}