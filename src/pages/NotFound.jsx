import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="empty">
      <h1>404</h1>
      <p>Esta página não existe.</p>
      <Link to="/">Voltar ao início</Link>
    </div>
  )
}
