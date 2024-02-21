import "./App.css";
import "./assets/css/main.css";
import "./assets/css/noscript.css";
import "./assets/css/fontawesome-all.min.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
