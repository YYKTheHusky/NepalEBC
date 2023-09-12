import { useNavigate } from 'react-router-dom'
// scss
import styles from 'components/Card/BlogLongCard.module.scss'

export default function BlogLongCard({ data }) {
  const navigate = useNavigate()
  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate(`/article/${data.id}`)}
    >
      <div className={styles.photoContainer}>
        <img src={data.photo} />
      </div>
      <div className={styles.description}>
        <h1>{data.title}</h1>
        <p className={styles.intro}>{data.introduction}</p>
        <p className={styles.date}>{data.date}</p>
      </div>
    </div>
  )
}
