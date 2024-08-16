import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about'
import MainDashboard from './components/MainDashboard';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import Profile from './components/Profile';
import LinkPage from './components/LinkPage';
import Proposals from './components/Proposals'; 
import AddProjects from './components/AddProjects';

function App() {
  return (
    <Router>
    <div className="flex">
      <ConditionalSidebar />
      <div className="flex-grow">
        <Routes>
        <Route path="/" element={<Home />} />          
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/add-project" element={<AddProjects />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/linkpage" element={<LinkPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </Router>
);
};

const ConditionalSidebar = () => {
  const location = useLocation();
  const dashboardRoutes = ['/dashboard', '/add-project', '/proposals', '/linkpage', '/profile', '/settings'];
  return dashboardRoutes.includes(location.pathname) ? <Sidebar /> : null;
};

export default App;
