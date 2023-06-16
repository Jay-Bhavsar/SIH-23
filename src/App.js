/* eslint-disable no-unused-vars */
import "./App.css";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import User from "./components/Auth/User";
import Form from "./components/Auth/Form/Form";
import Vision from "./components/Home/vision";
import Profile from "./components/Auth/Profile";
import  Logout  from "./components/Auth/Logout";
import One from "./components/Auth/Form/One";
import Second from "./components/Auth/Form/Second";
import Third from "./components/Auth/Form/Third";
import Fourth from "./components/Auth/Form/Fourth";
// import Form3 from "./components/Auth/Form/Form1";

function App() {
  return (
    <>
      <div>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                 <Form/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/part1"
              element={
                <ProtectedRoute>
                  <One/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/part2"
              element={
                <ProtectedRoute>
                  <Second/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/part3"
              element={
                <ProtectedRoute>
                  <Third/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/part4"
              element={
                <ProtectedRoute>
                 <Fourth/>
                </ProtectedRoute>
              }
            />
            
            <Route path="/vision" element={<Vision />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/logout"
              element={
                  <Logout />
              }
            ></Route>

            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
