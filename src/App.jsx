import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import About from "./Pages/About";
import Blog from "./pages/Blog.jsx";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Shop from "./pages/Shop.jsx";
import ProjectSingle from "./pages/ProjectSingle.jsx";
import BlogSingle from "./pages/BlogSingle.jsx";

export default function App() {
    return (
        <div>
            <BrowserRouter basename="/Design">  {/* Correct basename */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projectSingle" element={<ProjectSingle/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blogSingle" element={<BlogSingle/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
