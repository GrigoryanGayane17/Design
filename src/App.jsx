// App.js
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";
import ProjectSingle from "./pages/ProjectSingle.jsx";
import Services from "./pages/Services.jsx";
import About from "./Pages/About";
import Blog from "./pages/Blog.jsx";
import BlogSingle from "./pages/BlogSingle.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
    return (
        <BrowserRouter basename="/Design">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projectSingle/:id" element={<ProjectSingle />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about" element={<About />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blogSingle" element={<BlogSingle />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
