import "../styles/Livraison.css";
import Top from "../components/Top";
import Panier from "../components/Panier";
//import {produits} from "../datas/Produits";


function Livraison() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="col-12">
            <h2 className="livraison2">main</h2>
          </div>

          <div className="col-12">
            <h1 className="livraison">Choix par catégorie</h1>
          </div>
          <div className="col-12">
          <Top/>
          </div>
        </div>
        <div className="col-3">
          <div className="col-12">
            <h2 className="livraison1"><Panier/></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livraison
