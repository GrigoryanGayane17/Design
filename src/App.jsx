import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import About from "./Pages/About";
import Blog from "./pages/Blog.jsx";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/shop" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
