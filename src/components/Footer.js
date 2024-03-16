import './css/Footer.css'
function Footer() {
    return (
        <footer className="footer" >
            © {new Date().getFullYear()} Company Name. All rights reserved.
        </footer>
    );
}

export default Footer;