import { BrowserRouter , Route , Routes } from 'react-router-dom'


import Dashboard from './pages/Dashboard'
import Silebar from './components/Silebar'
import Ambassadeur from './pages/Ambassadeur'
import Actionnaire from './pages/Actionnaire'
import MembrePleinDroit from './pages/MembrePleinDroit'
import Partenaire from './pages/Partenaire'
import Mouvement from './pages/Mouvement'
import Credité from './pages/Credité'
import Container from './pages/Container'

function App() {

  return (
    <div>
    <BrowserRouter>
        <Silebar />
        <Routes>
          <Route path='/dashboard' element = {<Dashboard />}></Route>
          <Route path='/ambassadeur' element = {<Ambassadeur />}></Route>
          <Route path='/actionnaire' element = {<Actionnaire />}></Route>
          <Route path='/membre-plein-droit' element = {<MembrePleinDroit />}></Route>
          <Route path='/partenaire' element = {<Partenaire />}></Route>
          <Route path='/mouvement' element = {<Mouvement />}></Route>
          <Route path='/crediter' element = {<Container />}>
            <Route path=':ambassadeur' element = {<Credité />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
