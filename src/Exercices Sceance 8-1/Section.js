import React from "react";
import styled from "styled-components";



export default function Section(){
    const Section = styled.section `
    background-color : black ;
    color : white ;
    `
    const P = styled.p `
    color : gray ;
    `
    return(
    <Section className="row ">
    <div className="d-md-flex  justify-content-md-around  ">
    <div className=" flex-column p-5 ">
    <h1 className="ms-43">
    Shop in style
    </h1>
    <P >
    With this shop homepage template  
    </P>
    </div>
    
    </div>
    </Section>
    
    )
}