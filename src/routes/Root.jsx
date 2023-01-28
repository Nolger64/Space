import { HashRouter as Router, Link, Routes, Route } from "react-router-dom"


/*Importando los componentes para las rutas */
import Home from './home/Home'
import Crew from './crew/Crew'
import Destination from './destination/Destination'
import Technology from './technology/Technology'
import Navbar from "../components/navbar/Navbar"
/*-----------------------------------*/

const Root = () => {
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </Router>
        </>
    )
}
export default (Root)