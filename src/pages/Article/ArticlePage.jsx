// scss
import styles from 'pages/Article/ArticlePage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'

export default function ArticlePage() {
  return (
    <MainLayout>
      <div className={styles.container}></div>
    </MainLayout>
  )
}
