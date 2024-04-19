import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from './pages/Dashboard';
import ProtectedPages from './pages/ProtectedPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        
        <Route element={<ProtectedPages />}>
          <Route element={<Dashboard />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
