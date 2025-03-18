import { Button } from "@material-tailwind/react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./components/prodctInfo/ProductInfo";
import ScrollToTop from "./components/scrollTop/ScrollTop";

function App() {
  return (
    <div>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/productinfo" element={<ProductInfo/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App