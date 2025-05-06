import { useState } from "react";
import { BookProvider } from "./context/BookContext";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { Filters } from "./components/Filters";
import { ReadBooks } from "./components/ReadBooks";

export default function App() {
  const [filters, setFilters] = useState({ titulo: "", autor: "", genero: "" });

  return (
    <BookProvider>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gestión de Libros</h1>
        <BookForm />
        <Filters filters={filters} setFilters={setFilters} />
        <BookList filters={filters} />
        <ReadBooks />
      </div>
    </BookProvider>
  );
}
