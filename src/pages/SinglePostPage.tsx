import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../components'
import { Loader } from '../components/UI'
import { usePostFetching } from '../hooks/usePostFetching'

export const SinglePostPage: FC = memo(() => {
	const { id } = useParams()
	const { post } = usePostFetching(id)

	return (
		<div className='container'>{post ? <Post {...post} /> : <Loader />}</div>
	)
})
