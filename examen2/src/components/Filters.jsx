export const Filters = ({ filters, setFilters }) => {
    return (
      <div className="space-y-2 mt-4">
        {["titulo", "autor", "genero"].map(field => (
          <input
            key={field}
            type="text"
            placeholder={`Filtrar por ${field}`}
            value={filters[field]}
            onChange={e => setFilters({ ...filters, [field]: e.target.value })}
            className="w-full border p-2 rounded"
          />
        ))}
      </div>
    );
  };

  