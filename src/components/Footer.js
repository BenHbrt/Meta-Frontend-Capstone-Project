import './Footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <img src={require('../img/logo_footer.png')} alt="logo"/>
            <section className="footer_section">
                <span className="footer_section_title">Title</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
            </section>
            <section className="footer_section">
                <span className="footer_section_title">Title</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
            </section>
            <section className="footer_section">
                <span className="footer_section_title">Title</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
                <span className="footer_section_item">Item1</span>
            </section>
        </footer>
    )
}

export default Footer