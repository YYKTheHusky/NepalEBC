import { useEffect, useRef } from 'react'
// scss
import styles from 'pages/MainPage/MainPage.module.scss'

// video
import mainVideo from 'assets/video/mainpage-video.mp4'

// data
import blogData from 'data/blog/blog.json'

// components
import MainLayout from 'components/Layout/MainLayout'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import BlogCard from 'components/Card/BlogCard'
import MainPhotoGallery from 'components/PhotoGallery/MainPhotoGallery'

export default function MainPage() {
  const videoRef = useRef(null)
  const latestArticle = blogData.blog.slice(0, 3)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <MainLayout>
      <section className={styles.videoContainer}>
        <video ref={videoRef} autoPlay muted loop src={mainVideo} />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>尼泊爾EBC</h1>
          <h2 className={styles.text}>
            標高5364公尺<br></br>攀登聖母峰的起點<br></br>
          </h2>
        </div>
      </section>
      <div className={styles.contentContainer}>
        <section className={styles.introduction}>
          <p data-aos="zoom-in-up">
            &emsp;&emsp;2022年底，我獨自前往尼泊爾EBC，展開為期11天的徒步之旅。途中生了一場大病，發燒了6天，接近吃光了所有攜帶的藥物，最後走到Gorrak
            Shep，看到了人生第一個冰河。回頭檢視這整趟旅程，發現當地旅行社的醫療知識及設備的不足，想將這次的經驗寫成文章，希望未來準備前往朝聖的旅人們，可以擁有更充足的資訊及準備。
          </p>
        </section>
        <section className={styles.latestUpdate}>
          <SectionTitle text="最新文章" />
          <div className={styles.item}>
            {latestArticle.map((item) => (
              <BlogCard key={item.id} data={item} />
            ))}
          </div>
        </section>
        <section className={styles.youtube}>
          <SectionTitle text="相關影片" />
          <div className={styles.item}>
            <iframe
              src="https://www.youtube.com/embed/f8SdIjPcVao?si=LxrDklJtK3TQ8ZA8"
              allowFullScreen
              data-aos="flip-left"
            />
            <iframe
              src="https://www.youtube.com/embed/EoJPNiRBKsk?si=UOAnCMRMSy9RIHN9"
              allowFullScreen
              data-aos="flip-left"
              data-aos-delay="300"
            />
          </div>
        </section>
        <section className={styles.latestUpdate}>
          <SectionTitle text="照片分享" />
          <div className={styles.item}>
            <MainPhotoGallery />
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
