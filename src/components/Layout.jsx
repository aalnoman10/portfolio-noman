import NavBar from "./NavBar";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Message from "./Message";
import Projects from "./Projects";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Message />
            <Footer />
        </div>
    );
};

export default Layout;