const Navbar = ({notes}) => {
    return(
        <div className="navbar">
            <h1>Note App</h1>
            <p>Toplam {notes.length} adet not mevcuttur.</p>
        </div>
    )
}

export default Navbar;