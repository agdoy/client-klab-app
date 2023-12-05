import { Routes, Route } from 'react-router-dom';
import HomeDiscoPage from '../pages/Homepage/HomeDiscoPage'
import SignupPage from '../pages/Signup/SignupPage';
import LoginPage from '../pages/Login/LoginPage';
import NewDiscoPage from '../pages/CreateDisco/NewDiscoPage';
import DiscoDetailsPage from '../pages/DiscoDetails/DiscoDetailsPage';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeDiscoPage />} />

            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/crearDisco" element={<NewDiscoPage />} />
            <Route path='/discoDetails/:disco_id' element={<DiscoDetailsPage />} />
        </Routes>
    );
};

export default AppRoutes;