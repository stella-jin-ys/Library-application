import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./employees/Employees";
import Categories from "./pages/category/Categories";
import NewCategory from "./pages/category/NewCategory";
import Books from "./pages/book/Books";
import NewBook from "./pages/book/NewBook";
import DVDs from "./pages/dvd/DVDs";
import NewDVD from "./pages/dvd/NewDVD";
import LibraryItems from "./pages/libraryItem/LibraryItems";
import AudioBooks from "./pages/audioBook/AudioBooks";
import NewAudioBooks from "./pages/audioBook/NewAudioBook";
import References from "./pages/reference/References";
import NewReference from "./pages/reference/NewReference";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/newcategory" element={<NewCategory />} />
          <Route path="libraryItems" element={<LibraryItems />} />
          <Route path="books" element={<Books />} />
          <Route path="books/newbook" element={<NewBook />} />
          <Route path="dvds" element={<DVDs />} />
          <Route path="dvds/newDvd" element={<NewDVD />} />
          <Route path="audioBooks" element={<AudioBooks />} />
          <Route path="audioBooks/newAudio" element={<NewAudioBooks />} />
          <Route path="references" element={<References />} />
          <Route path="references/newReference" element={<NewReference />} />
          <Route path="employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
