import Link from "next/link"
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.link} href = '/'>Home</Link>
        <Link className={styles.link} href = '/blog'>Blog</Link>
        <Link className={styles.link} href = '/about'>About</Link>
      </div>
    </header>
  )
}
