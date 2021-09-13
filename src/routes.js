import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import AboutUs from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Arquitetura from './pages/services/arquitetura'
import Automacao from './pages/services/automacao'
import Computacao from './pages/services/computacao'
import Eletrica from './pages/services/eletrica'
import Negocios from './pages/services/negocios'
import Members from './pages/members'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={AboutUs} path='/Quem-somos-nos' />
            <Route component={Contact} path='/contato'/>
            <Route component={Services} path='/Servicos'/>
            <Route component={Arquitetura} path='/Servicos-Arquitetura'/>
            <Route component={Automacao} path='/Servicos-Automacao'/>
            <Route component={Computacao} path='/Servicos-Computacao'/>
            <Route component={Eletrica} path='/Servicos-Eletrica'/>
            <Route component={Negocios} path='/Servicos-Negocios'/>
            <Route component={Members} path='/membros'/>

        </BrowserRouter>

    )

}

export default Routes;
