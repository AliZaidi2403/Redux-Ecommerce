import Main from "./components/Main";
import FilteredProducts from "./components/FilteredProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="filteredProducts/:type" element={<FilteredProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
