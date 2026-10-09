export default function SearchFilters({ filters, onChange, breeds, locations, onReset }) {
  const update = e => onChange({ ...filters, [e.target.name]: e.target.value })

  return (
    <section className="filters">
      <input
        name="search"
        type="search"
        placeholder="Pesquisar pelo nome..."
        value={filters.search}
        onChange={update}
      />
      <select name="type" value={filters.type} onChange={update}>
        <option value="">Todos os tipos</option>
        <option value="Cão">Cães</option>
        <option value="Gato">Gatos</option>
      </select>
      <select name="breed" value={filters.breed} onChange={update}>
        <option value="">Todas as raças</option>
        {breeds.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select name="location" value={filters.location} onChange={update}>
        <option value="">Todas as localizações</option>
        {locations.map(l => <option key={l} value={l}>{l}</option>)}
      </select>
      <label className="check">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={e => onChange({ ...filters, onlyFavorites: e.target.checked })}
        />
        Só favoritos
      </label>
      <button className="btn-secondary" onClick={onReset}>Limpar</button>
    </section>
  )
}
