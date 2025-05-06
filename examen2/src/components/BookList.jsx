import { useBooks } from "../hooks/useBooks";

export const BookList = ({ filters }) => {
  const { books, removeBook, toggleRead } = useBooks();

  const filtered = books.filter(book =>
    (!filters.titulo || book.titulo.toLowerCase().includes(filters.titulo.toLowerCase())) &&
    (!filters.autor || book.autor.toLowerCase().includes(filters.autor.toLowerCase())) &&
    (!filters.genero || book.genero.toLowerCase().includes(filters.genero.toLowerCase()))
  );

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Libros</h2>
      {filtered.map(book => (
        <div key={book.id} className="border p-2 rounded mb-2 flex justify-between items-center">
          <div>
            <strong>{book.titulo}</strong> - {book.autor} ({book.año}) [{book.genero}]
          </div>
          <div>
            <button onClick={() => toggleRead(book.id)} className="text-sm text-blue-600 mr-2">
              {book.read ? "Marcar como no leído" : "Marcar como leído"}
            </button>
            <button onClick={() => removeBook(book.id)} className="text-sm text-red-600">Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};