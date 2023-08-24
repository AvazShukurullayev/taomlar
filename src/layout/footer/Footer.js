import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h5 className="text-center">&copy; Copyright reserved {new Date().getFullYear()}</h5>
            </div>
        </footer>
    )
}

export default Footer