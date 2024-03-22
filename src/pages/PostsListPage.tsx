import { FC, memo } from 'react'
import { PostsList } from '../components'

export const PostsListPage: FC = memo(() => {
	return (
		<div className='container'>
			<h1>Посты</h1>
			<PostsList />
		</div>
	)
})
