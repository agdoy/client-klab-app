import { Routes, Route } from 'react-router-dom';
import HomeDiscoPage from './../pages/homepage/HomeDiscoPage'
import SignupPage from '../pages/Signup/SignupPage';
import LoginPage from '../pages/Login/LoginPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeDiscoPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};

export default AppRoutes;
