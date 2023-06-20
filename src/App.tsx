import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import routes from './config/route'
// import Home from './pages/Home'
// import Dashboard from './pages/Dashboard'
// import About from './pages/About'


function App() {


  return (
    
      <BrowserRouter>
        {/*Navbar goes here*/}
          <Routes>
            { routes.map(( route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component/>
                }
              />
            ) )}
          </Routes>
      </BrowserRouter>    
  )
}

export default App
