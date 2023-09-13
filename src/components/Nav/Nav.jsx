import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// scss
import styles from 'components/Nav/Nav.module.scss'

// svg
import Logo from 'assets/icons/Logo.svg'
import Burger from 'assets/icons/burger.svg'

export default function Nav({ dark }) {
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(false)
  const [openMobileNav, setOpenMobileNav] = useState(false)

  // nav項目
  const navItems = [
    { text: '關於本站', path: '/about' },
    { text: '攻略文章', path: '/article' },
    { text: '影片', path: '/video' },
    { text: '聯絡我', path: '/contact' }
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

  // 開啟或關閉mobile nav ul
  const handleOpenMobileNav = () => {
    setOpenMobileNav(!openMobileNav)
  }

  // 當頁面大於768px或使用者滾動頁面，關閉mobile nav ul
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setOpenMobileNav(false)
      }
    }
    function handleScroll() {
      setOpenMobileNav(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`${scrolling ? styles.notTop : ''} ${
        dark ? styles.dark : styles.white
      }`}
    >
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
        {/* mobile navbar */}
        <div className={styles.navBurger}>
          <img src={Burger} onClick={handleOpenMobileNav} />
        </div>
        <ul
          className={
            openMobileNav
              ? styles.mobileItemContainerOpen
              : styles.mobileItemContainer
          }
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={styles.mobileItem}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
