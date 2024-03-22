import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../components'
import { SCROLL_PAGINATION_LIMIT } from '../../constants/constants'
import { usePaginatedPostsFetching } from '../../hooks'
import { Button, Loader } from '../UI'
import styles from './PostsList.module.css'

export const PostsList = memo(() => {
	const { posts, currentPage, totalCount, handleLoadMoreClick } =
		usePaginatedPostsFetching()

	return (
		<>
			{posts.length === 0 ? (
				<Loader />
			) : (
				<ul className={styles.postList}>
					{posts.map(post => (
						<Link to={`/posts/${post.id}`} key={post.id}>
							<Post isCard={true} {...post} />
						</Link>
					))}
				</ul>
			)}
			{currentPage > SCROLL_PAGINATION_LIMIT && posts.length !== totalCount && (
				<Button onClick={handleLoadMoreClick}>ЗАГРУЗИТЬ ЕЩЕ</Button>
			)}
		</>
	)
})
