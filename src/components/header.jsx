import { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'


export default function Menu() {
    return (
        <>
        <div className="body">
          <Link to="/" className="Link"> <h1 className="title"> <i className="bi bi-book"></i> Mundo das Palavras</h1> </Link>
          <form className="col-md-3" action="">
            <div className="form-group">
    
              <input type="text" className="form-control" id="pesquisaGeral" placeholder="Pesquisar" />
            </div>
          </form>
          <Link to="/perfil" className="Link"><i className="bi bi-person-circle perfilicone"></i> </Link> 
          
        </div>
    
        </>
      )
}
