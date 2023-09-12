// scss
import styles from 'pages/SingleArticle/SingleArticlePage.module.scss'
import { useParams } from 'react-router-dom'

// data
import blogData from 'data/blog/blog.json'

// components
import MainLayout from 'components/Layout/MainLayout'
import SectionTitle from 'components/SectionTitle/SectionTitle'

export default function SingleArticlePage() {
  const { blogId } = useParams()
  const data = blogData.blog.find((blog) => blog.id === blogId)

  return (
    <MainLayout dark={true}>
      <div className={styles.articleContainer}>
        <section className={styles.article}>
          <SectionTitle text={data.title} />
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <p className={styles.date}>最後更新日期：{data.date}</p>
        </section>
      </div>
    </MainLayout>
  )
}
