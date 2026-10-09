import { animals } from '../data/animals'

const DOG_API = 'https://dog.ceo/api/breed'
const CAT_API = 'https://api.thecatapi.com/v1/images/search'
const FALLBACK = 'https://placehold.co/600x400?text=Sem+imagem'

async function fetchImage(animal) {
  try {
    if (animal.type === 'Cão') {
      const res = await fetch(`${DOG_API}/${animal.apiBreed}/images/random`)
      const data = await res.json()
      return data.status === 'success' ? data.message : FALLBACK
    }
    const res = await fetch(`${CAT_API}?breed_ids=${animal.apiBreed}`)
    const data = await res.json()
    return data[0]?.url ?? FALLBACK
  } catch {
    return FALLBACK
  }
}

const cache = new Map()

async function withImage(animal) {
  if (!cache.has(animal.id)) cache.set(animal.id, fetchImage(animal))
  return { ...animal, image: await cache.get(animal.id) }
}

export async function getAnimals() {
  return Promise.all(animals.map(withImage))
}

export async function getAnimal(id) {
  const animal = animals.find(a => a.id === Number(id))
  if (!animal) return null
  return withImage(animal)
}
