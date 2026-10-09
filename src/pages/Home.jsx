import { useMemo, useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import SearchFilters from '../components/SearchFilters'
import Loader from '../components/Loader'
import { useAnimals } from '../hooks/useAnimals'
import { useFavorites } from '../hooks/useFavorites'

const initialFilters = { search: '', type: '', breed: '', location: '', onlyFavorites: false }

export default function Home() {
  const { animals, loading, error } = useAnimals()
  const { toggle, isFavorite } = useFavorites()
  const [filters, setFilters] = useState(initialFilters)

  const breeds = useMemo(
    () => [...new Set(animals.filter(a => !filters.type || a.type === filters.type).map(a => a.breed))].sort(),
    [animals, filters.type]
  )
  const locations = useMemo(() => [...new Set(animals.map(a => a.location))].sort(), [animals])

  const filtered = animals.filter(a =>
    a.name.toLowerCase().includes(filters.search.toLowerCase()) &&
    (!filters.type || a.type === filters.type) &&
    (!filters.breed || a.breed === filters.breed) &&
    (!filters.location || a.location === filters.location) &&
    (!filters.onlyFavorites || isFavorite(a.id))
  )

  const handleChange = next =>
    setFilters(next.type !== filters.type ? { ...next, breed: '' } : next)

  return (
    <>
      <section className="hero">
        <h1>Encontra o teu novo melhor amigo</h1>
        <p>{animals.length} animais à espera de uma família.</p>
      </section>

      <SearchFilters
        filters={filters}
        onChange={handleChange}
        breeds={breeds}
        locations={locations}
        onReset={() => setFilters(initialFilters)}
      />

      {loading && <Loader text="A carregar animais..." />}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        filtered.length > 0 ? (
          <div className="grid">
            {filtered.map(a => (
              <AnimalCard key={a.id} animal={a} favorite={isFavorite(a.id)} onToggleFavorite={toggle} />
            ))}
          </div>
        ) : (
          <p className="empty">Nenhum animal encontrado com esses filtros. 😿</p>
        )
      )}
    </>
  )
}
