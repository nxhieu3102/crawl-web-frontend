import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="h-[100vh]">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout