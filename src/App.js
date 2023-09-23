/* eslint-disable no-unused-vars */
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./components/Auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "./components/Styles/Layout.css"
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import User from "./components/Auth/User";
import Profile from "./components/Auth/Profile";
import Logout from "./components/Auth/Logout";
import Admin from "./components/Admin/Admin";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Adminlogin from "./components/Auth/Adminlogin";
import AdminProtectedRoute from "./components/Auth/AdminProtected";
import LandingPage from "./components/Home/LandingPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ARComponent from "./components/Jobs/ArComponent"
function App() {
  return (
    <>
      <div>
        <UserAuthContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route element={<ARComponent />} exact path="/ar" />
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/user"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/adminallresearch"
                element={
                  <AdminProtectedRoute>
                    <Admin />
                  </AdminProtectedRoute>
                }
              />

              <Route path="/adminlogin" element={<Adminlogin />} />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              ></Route>

              <Route path="/logout" element={<Logout />}></Route>

              <Route path="/forgetpass" element={<ForgotPassword />} />
            </Routes>
            <Footer />
          </Router>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
