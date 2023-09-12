// scss
import styles from 'components/Card/BlogCard.module.scss'

export default function BlogCard({ data }) {
  return (
    <div className={styles.cardContainer} data-aos="zoom-in-up">
      <div className={styles.imgContainer}>
        <img src={data.photo} />
      </div>
      <div className={styles.postContent}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.introduction}</p>
        <p className={styles.time}>{data.date}</p>
      </div>
    </div>
  )
}
