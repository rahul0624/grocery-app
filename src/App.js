import Home from "./pages/Home";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
