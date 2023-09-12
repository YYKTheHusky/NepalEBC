// scss
import styles from 'pages/Article/ArticlePage.module.scss'

// components
import MainLayout from 'components/Layout/MainLayout'
import BlogLongCard from 'components/Card/BlogLongCard'

// data
import blogData from 'data/blog/blog.json'

export default function ArticlePage() {
  return (
    <MainLayout dark={true}>
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          {blogData.blog.map((item) => (
            <BlogLongCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
