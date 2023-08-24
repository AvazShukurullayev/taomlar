import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#!" className="nav__logo"></a>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#!"
                                                     className="nav__link text-decoration-none fs-6 text-dark">About</a>
                        </li>
                        <li className="nav__item"><a href="#!"
                                                     className="nav__link text-decoration-none fs-6 text-dark">Contact</a>
                        </li>
                        <li className="nav__item"><a href="#!"
                                                     className="nav__link text-decoration-none fs-6 text-dark">Support &amp; Help</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header