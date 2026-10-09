import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAnimal } from '../hooks/useAnimals'
import { useFavorites } from '../hooks/useFavorites'

export default function AnimalDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { animal, loading } = useAnimal(id)
  const { toggle, isFavorite } = useFavorites()
  const [requested, setRequested] = useState(false)

  if (loading) return <Loader />
  if (!animal) {
    return (
      <div className="empty">
        <p>Animal não encontrado.</p>
        <Link to="/">Voltar à lista</Link>
      </div>
    )
  }

  const favorite = isFavorite(animal.id)

  return (
    <div className="detail">
      <button className="btn-link" onClick={() => navigate(-1)}>← Voltar</button>
      <div className="detail-grid">
        <img src={animal.image} alt={animal.name} />
        <div>
          <h1>{animal.name}</h1>
          <p className="muted">{animal.type} · {animal.breed}</p>
          <p className="description">{animal.description}</p>
          <ul className="info">
            <li><strong>Idade:</strong> {animal.age}</li>
            <li><strong>Sexo:</strong> {animal.sex}</li>
            <li><strong>Porte:</strong> {animal.size}</li>
            <li><strong>Localização:</strong> 📍 {animal.location}</li>
          </ul>
          <div className="actions">
            <button className="btn" onClick={() => setRequested(true)} disabled={requested}>
              {requested ? 'Pedido enviado ✔' : `Quero adotar o ${animal.name}`}
            </button>
            <button className="btn-secondary" onClick={() => toggle(animal.id)}>
              {favorite ? '♥ Favorito' : '♡ Adicionar aos favoritos'}
            </button>
          </div>
          {requested && (
            <p className="success">
              Obrigado! A associação de {animal.location} vai entrar em contacto contigo em breve.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
