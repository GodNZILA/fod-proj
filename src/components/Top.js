import { produits } from "../datas/Produits";
import "../styles/Product.css";

function Top() {

  const topventes = produits.filter((produit) => produit.top === true);
  return (
    <>
      <div className="top">
        <h2>Top des ventes</h2>
      </div>

      <div className="product">
        <div className="img-product">

        </div>
        <div className="all-products">
          {topventes.map((produit) => (
            <div className="product-info">
              <h3>{produit.nom}</h3>
              <p>{produit.details}</p>
              <p>{produit.prix} $</p>
              <button className="product-btn">Ajouter au panier</button>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Top
