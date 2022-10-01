import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./employees/Employees";
import Categories from "./pages/category/Categories";
import NewCategory from "./pages/category/NewCategory";
import Books from "./pages/book/Books";
import NewBook from "./pages/book/NewBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/newcategory" element={<NewCategory />} />
          <Route path="books" element={<Books />} />
          <Route path="newbook" element={<NewBook />}></Route>
          <Route path="employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
