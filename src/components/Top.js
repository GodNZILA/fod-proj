import { produits } from "../datas/Produits";
import "../styles/Product.css";
//import Salade from '../assets/Salade.jpg';


function Top() {

  const topventes = produits.filter((produit) => produit.top === true);
  const flopventes = produits.filter((produit) => produit.top === false);
  return (
    <div class="container text-center">
      <h2 class="display-4 text-center mb-5">Top des ventes</h2>
      <div class="row ">
              {topventes.map((produit) => (
        <div class="col-md-4 col-sm-6 ">
          <div className="product-info">
            <img src="../assets/Salade.jpg" alt="plat ou boisson" className="w-100" />
            <div className="card-body">
              <h3>{produit.nom}</h3>
              <p>{produit.details}</p>
              <p>{produit.prix} $</p>
              <button className="product-btn">Ajouter au panier</button>
            </div>
          </div>
        </div>
    ))}
      </div>
      <br/>
      <br></br>
      <h2 class="display-4 text-center mb-5">Flop ventes</h2>
      <div class="row ">
              {flopventes.map((produit) => (
        <div class="col-md-4 col-sm-6 ">
          <div className="product-info">
            <img src="../assets/Salade.jpg" alt="plat ou boisson" className="w-100" />
            <div className="card-body">
              <h3>{produit.nom}</h3>
              <p>{produit.details}</p>
              <p>{produit.prix} $</p>
              <button className="product-btn">Ajouter au panier</button>
            </div>
          </div>
        </div>
    ))}
      </div>
    </div>
  );
}

export default Top
