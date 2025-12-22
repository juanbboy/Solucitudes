import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Welcome from '../components/welcome/Welcome'
import RegisterScreen from '../components/login/RegisterScreen'
import Listmyrequest from '../components/listarequest/Listmyrequest'


const DashboardRouter = () => {

    return (
        <>
            <Navbar />
            <div className="mx-3 my-4">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/register" element={<RegisterScreen />} />
                    <Route path="/listmyrequest" element={<Listmyrequest />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRouter
