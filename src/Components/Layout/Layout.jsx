import Header from './Header';
import Footer from './Footer';
import "../Style/HomeStyleOne.css"

function Layout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout