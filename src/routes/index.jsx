import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import DockerHub from "../pages/dockerHub";
import Sobre from "../pages/sobre";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/dockerHub" element={<DockerHub />} />
            <Route path="/sobre" element={<Sobre />} />


        </Routes>
    )



}

export default AppRoutes;