import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App;