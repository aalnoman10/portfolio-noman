import NavBar from "./NavBar";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <About />
            <Skills />
            <Footer />
        </div>
    );
};

export default Layout;