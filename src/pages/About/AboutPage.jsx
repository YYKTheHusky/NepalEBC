// scss
import styles from 'pages/About/AboutPage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'

// photo
import photo from 'assets/photos/photo01.png'

export default function AboutPage() {
  return (
    <MainLayout>
      <section className={styles.photoContainer}>
        <img src={photo} />
        <div className={styles.textContainer}>
          <h3>自己一個人去會危險嗎？</h3>
          <h3>會很困難嗎？有沒有發生高山症？</h3>
          <h3>可以洗澡嗎？有吹風機嗎？</h3>
          <h3>旅行社的報價是多少？</h3>
          <h3>裝備要怎麼準備？錢錢要帶多少？</h3>
          <p>
            &emsp;&emsp;出發前我大概有10萬個問題，當時適逢疫情剛趨緩，已經有2年沒有人更新心得文章。我在背包客棧上爬了一篇又一篇的文章，請教了多年前去過的朋友，慢慢整理出需要的資訊，解開了一個個問題。
          </p>
          <p>
            &emsp;&emsp;我把當初的疑問整理在這個網站，希望你可以在這裡找到需要的資訊。如果有任何不清楚想要詢問的，也歡迎聯絡我。
          </p>
        </div>
      </section>
    </MainLayout>
  )
}
