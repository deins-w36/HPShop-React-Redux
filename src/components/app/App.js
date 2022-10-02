import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import HeadphonesList from '../catalog/Headphones-list'
import BasketList from '../basket/Basket-list'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<HeadphonesList />} />
                <Route exact path='/basket' element={<BasketList />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
