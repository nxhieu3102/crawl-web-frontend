import Footer from "./Footer"
import NavBar from "./Navbar"
const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="w-full flex justify-center bg-[#f5f5f7]">
                <div className="w-full max-w-[1200px]">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout