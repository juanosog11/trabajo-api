import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext.jsx";



import RegisterPage from "./pages/registerPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import AgendarPage from "./pages/AgendarPage.jsx";
import ServiciosPage from "./pages/ServiciosPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* privadas */}

          <Route element={<ProtectedRoute />}>

          <Route path="/servicios" element={<AgendarPage />} />
          <Route path="/tasks/:id" element={<h1>Home Page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;