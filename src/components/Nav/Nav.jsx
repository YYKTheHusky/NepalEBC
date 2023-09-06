import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// scss
import styles from 'components/Nav/Nav.module.scss'

// svg
import Logo from 'assets/icons/Logo.svg'

export default function Nav() {
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(false)

  // nav項目
  const navItems = [
    { text: '關於本站', path: '/about' },
    { text: '攻略文章', path: '/article' },
    { text: '影片', path: '/contact' },
    { text: '聯絡我', path: '/video' }
  ]

  // 下滑時nav改為不透明，至頂時為透明背景
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={scrolling && styles.notTop}>
      <div className={styles.innerContainer}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <img src={Logo} alt="logo" />
          <div>尼泊爾EBC小故事</div>
        </div>
        <div className={styles.itemContainer}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
