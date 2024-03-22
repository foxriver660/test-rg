import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants/constants'
import { Button } from '../UI'
import styles from './Header.module.css'

export const Header = memo(() => {
	return (
		<header className={styles.header}>
			<h2>Тестовое задание для RG</h2>
			<Link to={PATH.MAIN}>
				<Button>На главную</Button>
			</Link>
		</header>
	)
})
