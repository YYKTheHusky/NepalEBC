// scss
import styles from 'components/Card/BlogCard.module.scss'

export default function BlogCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
      </div>
      <div className={styles.postContent}>
        <h1 className={styles.title}>Title Goes Here</h1>
        <p className={styles.description}>
          New York, the largest city in the U.S., is an architectural marvel
          with plenty of historic monuments, magnificent buildings and countless
          dazzling skyscrapers.
        </p>
        <p className={styles.time}>2023/09/05</p>
      </div>
    </div>
  )
}
