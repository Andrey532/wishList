import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homePage/HomePage'
import { MainPage } from './pages/mainPage/MainPage'

const App = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App
