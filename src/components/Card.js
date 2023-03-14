<div class="products">
  <h2 >Top des ventes</h2>
  {topventes.map((produit) => (
  <div class="product">
    <div>
      <img src="logo.png" alt="">
      <div className="composition"></div>
    </div>
    <div class="nameprice">
      <h1>{produit.nom}</h1>
      <span>{produit.categorie}</span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, laudantium?</p>
    <div class="stars">
    <span>{produit.prix} MAD</span>
    </div>
    <div class="bay">
    <i class="fa-sharp fa-solid fa-link"></i>
    <i class="fa-regular fa-cart-shopping"></i>
    </div>
  </div>

</div>
