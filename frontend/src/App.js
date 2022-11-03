import RoutesManager from "./components/Routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClouse={5000} />
      <RoutesManager />
    </BrowserRouter>
  )
}
