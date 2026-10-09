import { useEffect, useState } from 'react'
import { getAnimals, getAnimal } from '../services/api'

export function useAnimals() {
  const [animals, setAnimals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    getAnimals()
      .then(data => active && setAnimals(data))
      .catch(() => active && setError('Não foi possível carregar os animais.'))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [])

  return { animals, loading, error }
}

export function useAnimal(id) {
  const [animal, setAnimal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    getAnimal(id)
      .then(data => active && setAnimal(data))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [id])

  return { animal, loading }
}
