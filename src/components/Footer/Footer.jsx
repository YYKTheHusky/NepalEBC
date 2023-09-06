// scss
import styles from 'components/Footer/Footer.module.scss'

// svg
import YoutubeLogo from 'assets/icons/youtube.svg'
import GithubLogo from 'assets/icons/github.svg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Follow me on</p>
      <div className={styles.socialLink}>
        <a
          href="https://www.youtube.com/@NienNienKo/featured"
          target="_blank"
          rel="noreferrer"
        >
          <img src={YoutubeLogo} alt="YoutubeLogo" />
        </a>
        <a href="https://github.com/magic9701" target="_blank" rel="noreferrer">
          <img src={GithubLogo} alt="GithubLogo" />
        </a>
      </div>
      <p className={styles.right}>
        © 2023 尼泊爾EBC小故事 All rights reserved
      </p>
    </footer>
  )
}
