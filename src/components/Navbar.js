import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
      <ul >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/livraison">Livraison</a>
        </li>
      </ul>
    </nav>
    </div>
  )

}

export default Navbar
