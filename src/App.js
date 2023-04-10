import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div className="App bg-slate-300 h-[100vh]">
      <BrowserRouter>
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path='/' element={<EmployeeList/>} />
          <Route index element={<EmployeeList/>} />
          <Route path='/employeeList' element={<EmployeeList/>} />
          <Route path='/addEmployee' element={<AddEmployee/>} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee />}  />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;