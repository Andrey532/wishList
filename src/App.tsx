import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ModalRegistration } from './components/modals/modalRegistration/ModalRegistration'
import { HomePage } from './pages/homePage/HomePage'
import { MainPage } from './pages/mainPage/MainPage'

function App() {

    return (
        <>
        <Routes>
            <Route path="*" element={<MainPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/registration" element={<ModalRegistration/>}/>
        </Routes>
            
        </>
    )
}

export default App
