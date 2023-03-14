import { produits } from "../datas/Produits";
import "../styles/Product.css";
//import  Card  from "./Card";
import "../styles/Top.css";
//import Salade from '../assets/Salade.jpg';


function Top() {

  const topventes = produits.filter((produit) => produit.top === true);
  const flopventes = produits.filter((produit) => produit.top === false);
  return (
    <div className="all">
      <h2 >Top des ventes</h2>
      <div className="products">

      {topventes.map((produit) => (
    <div className="product">
      <div className="image">
        <img src="Salade.jpg" alt=""/>
        <div className="composition"></div>
      </div>
      <div className="nameprice">
        <h1>{produit.nom}</h1>
      </div>
        <span>{produit.categorie}</span>
      <div className="stars">
      <span>{produit.prix} MAD</span>
      <span className="bay">
      <i className="fa-sharp fa-solid fa-link"></i>
      <i className="fa-regular fa-cart-shopping"></i>
      </span>
      </div>
    </div>

))}
    </div>
      <br></br>
      <h2 >Flop ventes</h2>
      <div className="products">

      {flopventes.map((produit) => (
    <div className="product">
      <div className="image">
        <img src="logo.png" alt=""/>
        <div className="composition"></div>
      </div>
      <div className="nameprice">
        <h1>{produit.nom}</h1>
      </div>
        <span>{produit.categorie}</span>
      <div className="stars">
      <span>{produit.prix} MAD</span>
      <span className="bay">
      <i className="fa-sharp fa-solid fa-link"></i>
      <i className="fa-regular fa-cart-shopping"></i>
      </span>
      </div>
    </div>

))}
    </div>
    </div>
  );
}

export default Top
