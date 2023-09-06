// scss
import styles from 'components/SectionTitle/SectionTitle.module.scss'

export default function SectionTitle({text}) {
  return (
    <h2 className={styles.title}>{text}</h2>
  )
}