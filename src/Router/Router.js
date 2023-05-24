import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import A404 from './404'
import Home from '../views/home'

function Routeur(){

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home></Home>} />
                <Route path='*' element={<A404></A404>} />
            </Routes>
        </Router>
    )
}

export default Routeur