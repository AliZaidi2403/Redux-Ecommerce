import Main from "./components/Main";
import FilteredProducts from "./components/FilteredProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="filteredProducts/:type" element={<FilteredProducts />} />
          <Route
            path="filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
