import { FC, memo } from 'react'
import { TPost } from '../../types/types'
import styles from './Post.module.css'

type PostProps = TPost & {
	isCard?: boolean
}

export const Post: FC<PostProps> = memo(
	({ isCard = false, id, userId, title, body }) => {
		return (
			<div className={`${isCard ? styles.post : styles.card}`}>
				{!isCard && (
					<h2 className={styles.postId}>
						This post write by UserId: ({userId})
					</h2>
				)}
				<h2 className={styles.postId}>Post ID: {id}</h2>
				<h2 className={styles.postTitle}>{title}</h2>
				<p className={styles.postBody}>{body}</p>
			</div>
		)
	}
)
