/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
	children: string
	onClick?: React.MouseEventHandler
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles.btn} {...props}>
			{children}
		</button>
	)
}
