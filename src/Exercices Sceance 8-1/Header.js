import React from "react" ;



export default function Header(){
 
 
    return(
        <header>
        <nav className="row navbar navbar-expand-lg navbar-light bg-light ">
        <div className="col-lg-3 col-sm-3" >
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        </div>
        <div className="col-lg-7 col-sm-6">
        <ul className="navbar-nav list-group list-group-horizontal d-flex ">
        <li className="  nav-item">
          <a className=" nav-link active ms-2"  href="#">Home</a>
        </li>
        <li className=" nav-item">
        <a className="nav-link ms-2" >Link</a>
      </li>
      <li className=" nav-item dropdown ms-2">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          
        </li>
      
        </ul>
        </div>
        <div className="col-lg-3 col-sm-4 ">
        <button className="btn btn-outline-dark" >
        <img src='Img-2/cart-fill.svg' className="me-1 mb-1" />
        Cart
        <span class="ms-2 badge bg-dark rounded-pill "> 0 </span>
        </button>
        </div>
        
</nav>

        </header>

    ) ;
}