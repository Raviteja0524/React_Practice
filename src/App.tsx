import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Personaldetails from './components/Personaldetails';
import { BrowserRouter } from 'react-router-dom';
import Studentform from './components/Studentform';
import { UserContextProvider } from './context/UserContextProvider';
import DisplayDetails from './components/DisplayDetails';
import Books from './components2/books';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personaldetails />} />
        </Routes>
        <Routes>
          <Route path="/studentform" element={<Studentform />} />
        </Routes>
        <Routes>
          <Route path="/DisplayDetails" element={<DisplayDetails />} />
        </Routes>
        <Routes>
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
