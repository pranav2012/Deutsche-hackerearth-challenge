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

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Blog />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
