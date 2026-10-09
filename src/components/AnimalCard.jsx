import { Link } from 'react-router-dom'

export default function AnimalCard({ animal, favorite, onToggleFavorite }) {
  return (
    <article className="card">
      <Link to={`/animal/${animal.id}`} className="card-link">
        <img src={animal.image} alt={animal.name} loading="lazy" />
        <div className="card-body">
          <h3>{animal.name}</h3>
          <p className="muted">{animal.breed} · {animal.age}</p>
          <div className="tags">
            <span className={`tag ${animal.type === 'Cão' ? 'dog' : 'cat'}`}>{animal.type}</span>
            <span className="tag">📍 {animal.location}</span>
          </div>
        </div>
      </Link>
      <button
        className={`fav ${favorite ? 'active' : ''}`}
        onClick={() => onToggleFavorite(animal.id)}
        aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {favorite ? '♥' : '♡'}
      </button>
    </article>
  )
}
