const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="bg-slate-600">
        <p>{description}</p>
      </div>
    </div>
  )
}
export default Card
