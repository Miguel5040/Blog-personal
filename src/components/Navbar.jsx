
const Navbar = () => (
    <nav className="flex justify-between py-3">
        <div>
            Hola soy la imagen
        </div>
        <div className="sm:flex gap-8 hidden">
            <div className="flex gap-4">
                <a href="/">Home</a>
                <a href="/">Articles</a>
            </div>
            <div className="flex gap-4">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
        <div className="sm:hidden">
            <span>#</span>
        </div>
    </nav>
)

export default Navbar