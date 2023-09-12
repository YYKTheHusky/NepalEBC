// scss
import styles from 'pages/Video/VideoPage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'

// photo
import background from 'assets/photos/background-mountain-2.png'

export default function VideoPage() {
  const videosSrc = [
    'https://www.youtube.com/embed/QD_T4UzRbaY?si=-qJB8_giav34jP4E',
    'https://www.youtube.com/embed/f8SdIjPcVao?si=CkNyi6_gBqzxeydt',
    'https://www.youtube.com/embed/d5GmgmQQrzc?si=I2_8u4rZiw_i1hHE',
    'https://www.youtube.com/embed/sB5J3fLFChU?si=ch9TWF2upW5CJIHu',
    'https://www.youtube.com/embed/bK8Hz__sI_Q?si=cyztfqbVn1ZkBjyd',
    'https://www.youtube.com/embed/EoJPNiRBKsk?si=ewujr8HH6t74c_CN',
    'https://www.youtube.com/embed/F9TGEt1Uo_M?si=oSMdw8HcGCMZfd_d'
  ]

  const iframeElements = videosSrc.map((src, index) => (
    <iframe
      key={index}
      src={src}
      allowFullScreen
      data-aos="zoom-in-right"
      data-aos-delay={index * 300}
    />
  ))

  return (
    <MainLayout dark={true}>
      <div className={styles.container}>
        <img src={background} />
        <div className={styles.videos}>
          <div className={styles.videoContainer}>{iframeElements}</div>
        </div>
      </div>
    </MainLayout>
  )
}
