import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const BookContext = createContext();
const DvdContext = createContext();
const CategoryContext = createContext();

export function BooksProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8000/api/books");
      console.log(res.data);
      setBooks(res.data);
    };
    fetchBooks();
    setLoading(false);
  }, []);

  return (
    <BookContext.Provider value={{ books, loading }}>
      {children}
    </BookContext.Provider>
  );
}
export function DvdsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [dvds, setDvds] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchDvds = async () => {
      const res = await axios.get("http://localhost:8000/api/dvds");
      setDvds(res.data);
    };
    fetchDvds();
    setLoading(false);
  }, []);
  return (
    <DvdContext.Provider value={{ dvds, loading }}>
      {children}
    </DvdContext.Provider>
  );
}
export function CategoryProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:8000/api/categories");
      setCategories(res.data);
    };
    fetchCategories();
    setLoading(false);
  }, []);
  return (
    <CategoryContext value={{ categories, loading }}>
      {children}
    </CategoryContext>
  );
}

export function BookApi() {
  const context = useContext(BookContext);
  return context;
}
export function DvdApi() {
  const context = useContext(DvdContext);
  return context;
}
export function CategoryApi() {
  const context = useContext(CategoryContext);
  return context;
}
