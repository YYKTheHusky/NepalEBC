// scss
import styles from 'pages/About/AboutPage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.container}></div>
    </MainLayout>
  )
}
