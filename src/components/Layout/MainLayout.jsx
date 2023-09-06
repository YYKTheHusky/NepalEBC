// scss
import styles from 'components/Layout/MainLayout.module.scss'

// components
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.contentContainer}>{children}</div>
      <Footer />
    </>
  )
}
