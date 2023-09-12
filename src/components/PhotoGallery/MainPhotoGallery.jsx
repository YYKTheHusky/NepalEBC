// scss
import styles from 'components/PhotoGallery/MainPhotoGallery.module.scss'

export default function MainPhotoGallery() {
  return (
    <div className={styles.photoGallery}>
      {[300, 500, 550, 550, 500].map((delay, index) => (
        <div
          key={index}
          className={styles.photo}
          data-aos="zoom-in"
          data-aos-delay={delay}
          data-aos-anchor-placement="top-bottom"
        ></div>
      ))}
    </div>
  )
}
