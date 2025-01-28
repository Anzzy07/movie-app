import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Favorites } from "./pages/Favorites";
import { Navbar } from "./component/Navbar";
import { MovieProvider } from "./context/SavedMovie.context";
import { Login } from "./pages/Login";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
