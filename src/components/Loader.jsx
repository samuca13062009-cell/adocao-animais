export default function Loader({ text = 'A carregar...' }) {
  return (
    <div className="loader">
      <div className="spinner" />
      <p>{text}</p>
    </div>
  )
}
