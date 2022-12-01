import styles from '../../styles/Home.module.css'

const Card = ({ title, description }) => {
  return (
    <div className={styles.cardtext}>
      <h2>{title} - price : {description}</h2>
    </div>
  )
}
export default Card
