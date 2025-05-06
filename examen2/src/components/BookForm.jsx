import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { v4 as uuid } from "uuid";

export const BookForm = () => {
  const [form, setForm] = useState({ titulo: "", autor: "", genero: "", año: "" });
  const { addBook } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ ...form, id: uuid(), read: false });
    setForm({ titulo: "", autor: "", genero: "", año: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2 bg-white shadow rounded">
      {["titulo", "autor", "genero", "año"].map(field => (
        <input
          key={field}
          type="text"
          placeholder={field}
          value={form[field]}
          onChange={e => setForm({ ...form, [field]: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Agregar Libro</button>
    </form>
  );
};