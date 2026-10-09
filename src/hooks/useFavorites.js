import { useEffect, useState } from 'react'

const KEY = 'patinhas-favoritos'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites))
    } catch {}
  }, [favorites])

  const toggle = id =>
    setFavorites(f => (f.includes(id) ? f.filter(x => x !== id) : [...f, id]))

  return { favorites, toggle, isFavorite: id => favorites.includes(id) }
}
