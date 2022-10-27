import React from "react";
import styled from "styled-components";





export default function Footer(){
    const Footer = styled.footer `
    background-color : black ;
    color : white ;
    

    `
    return (
        <Footer className="row">
        <div className='col p-4 d-flex justify-content-center'>
        <span className="fs-6" >
        Copyright © Your Website 2022
        </span>
        </div>
        </Footer>
        
    )


}





