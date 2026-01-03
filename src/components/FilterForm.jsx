function FilterForm({ filter, onFilterChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      />
    </div>
  );
}

export default FilterForm;
