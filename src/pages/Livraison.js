import "../styles/Livraison.css";
import Top from "../components/Top";
//import {produits} from "../datas/Produits";


function Livraison() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="livraison">Livraison</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h2 className="livraison1">sidebar</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h2 className="livraison2">main</h2>
        </div>
      </div>
      <div className="row">
        <Top className="col-12"/>
      </div>
    </div>
  );
}

export default Livraison
