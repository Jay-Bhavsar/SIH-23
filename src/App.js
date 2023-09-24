/* eslint-disable no-unused-vars */
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Auth/Signup";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import "./components/Styles/Layout.css";
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
import ARComponent from "./components/Jobs/ArComponent";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Job from "./components/Jobs/Job";
import JobsForm from "./components/Jobs/JobsForm";
import Calendar from "./components/Events/Calendar";
import OurMission from "./components/OurMission/OurMission";
import UserReg from "./components/LoginLogout/UserReg";
import OrgReg from "./components/LoginLogout/OrgReg";
import AddCourses from "./components/Courses/AddCourses";

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
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/courses" element={<Courses />} />
              <Route exact path="/jobs" element={<Job />} />
              <Route exact path="/jobform" element={<JobsForm />} />
              <Route exact path="/events" element={<Calendar />} />
              <Route exact path="/mission" element={<OurMission />} />
              <Route exact path="/reguser" element={<UserReg />} />
              <Route exact path="/regorg" element={<OrgReg />} />
              <Route exact path="/addcourse" element={<AddCourses />} />

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
              <Route path="/adminlogin" element={<Adminlogin />} />
              <Route path="/logout" element={<Logout />}></Route>

              <Route path="/signup" element={<Signup />} />

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
