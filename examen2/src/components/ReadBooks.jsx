import { useBooks } from "../hooks/useBooks";

export const ReadBooks = () => {
  const { books } = useBooks();
  const readBooks = books.filter(book => book.read);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Libros Leídos</h2>
      {readBooks.map(book => (
        <div key={book.id} className="border p-2 rounded mb-2">
          {book.title} - {book.author}
        </div>
      ))}
    </div>
  );
};