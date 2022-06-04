import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Blog } from "../components/Blog";
import Login from "../components/Login";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Article from "../components/Article";
import Register from "../components/Register";
import { useState } from "react";
import ErrorPage from "../components/ErrorPage";

export default function App() {
  const [isloggedin, setisloggedin] = useState(false);

  return (
    <BrowserRouter>
      <Header isloggedin={isloggedin}/>
      <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/login" element={<Login setisloggedin={setisloggedin}/>} />
        <Route path="/register" element={<Register setisloggedin={setisloggedin}/>} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
