// scss
import styles from 'components/SectionTitle/SectionTitle.module.scss'

export default function SectionTitle({ text }) {
  return (
    <h2
      className={styles.title}
      data-aos="fade-right"
      data-aos-anchor-placement="bottom-bottom"
    >
      {text}
    </h2>
  )
}
