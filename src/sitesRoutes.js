import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Home from './pages/home'
import CorPimaria from './pages/corPimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/corPrimaria' element={<CorPimaria />}/>
                <Route path='/frequencia' element={<Frequencia />}/>
                <Route path='/ingresso' element={<Ingresso />}/>
                <Route path='/maiorNumero' element={<MaiorNumero/>}/>
            </Routes>
        </BrowserRouter>
    )
}