// scss
import styles from 'pages/Contact/ContactPage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'

// photo
import backgroundMountain from 'assets/photos/background-mountain.png'
import email from 'assets/icons/email.svg'
import youtube from 'assets/icons/youtube-2.svg'

export default function ContactPage() {
  return (
    <MainLayout dark={true}>
      <div className={styles.container}>
        <img src={backgroundMountain} />
        <div className={styles.infoContainer}>
          <div className={styles.innerContainer}>
            <h3 className={styles.welcomeWords}>哈囉，歡迎聯絡我！</h3>
            <div className={styles.item}>
              <img src={email} className={styles.email} />
              <a href="mailto:magic9701@gmail.com">magic9701@gmail.com</a>
            </div>
            <div className={styles.item}>
              <img src={youtube} className={styles.youtube} />
              <a
                href="https://www.youtube.com/@NienNienKo/featured"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/@NienNienKo/featured
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
