import { Loader } from "./Loader";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header"
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Set loading to false after initial render
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="min-h-[100vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Toaster />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
            <Mail />
            <Social />
        </div>
    );
};

export default HomePage;