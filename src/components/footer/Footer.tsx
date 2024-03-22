import { memo } from 'react'
import styles from './Footer.module.css'

export const Footer = memo(() => {
	return <footer className={styles.footer}>©Ivan Safonov</footer>
})
