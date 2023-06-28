import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import Banner from "./components/Banner";
import About from "./components/About";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <About />
            <Footer />
        </div>
    );
};

export default Layout;