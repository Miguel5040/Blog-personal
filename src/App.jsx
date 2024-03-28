import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'

const App = () => (

    <div className='flex flex-col w-[90%] max-w-[1200px]'>
        <BrowserRouter>
            <Navbar />
            <div className='flex flex-col items-center'>
                <Routes>
                    <Route index element={<Home />} />
                    <Route element={<Articles />} path='/articles' />
                </Routes>
            </div>
        </BrowserRouter>

    </div>
)

export default App
