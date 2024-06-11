import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Cabinet from '../pages/Cabinets';
import Error404 from '../components/Error404';
import Events from '../pages/Events';
import ProfilePage from '../pages/ProfilePage';
import EventsPage from '../pages/EventsPage';


const RedirectToHome = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/');
    }, []);

    return null;
};
const PageRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<RedirectToHome />} />
            <Route exact path='/cabinet' element={<Cabinet />} />
            <Route exact path='/cabinet/:session/:name' element={<ProfilePage />} />
            <Route exact path='/events/:event' element={<EventsPage />} />
            <Route exact path='/events' element={<Events />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default PageRoutes;
