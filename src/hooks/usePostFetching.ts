import { useEffect, useState } from 'react'
import { dataFetcher } from '../api/fetcher'
import { TPost } from '../types/types'

export const usePostFetching = (id?: string) => {
	const [post, setPost] = useState<TPost | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await dataFetcher.getPostById(id)
				setPost(data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [id])

	return { post }
}
