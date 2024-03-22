import { useEffect, useState } from 'react'
import { dataFetcher } from '../api/fetcher'
import { POSTS_LIMIT, SCROLL_PAGINATION_LIMIT } from '../constants/constants'
import { TPost } from '../types/types'

export const usePaginatedPostsFetching = () => {
	const [posts, setPosts] = useState<TPost[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(true)
	/* TOTAL POST COUNT */
	const [totalCount, setTotalCount] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			if (fetching) {
				try {
					const paginationQueryString = `?_limit=${POSTS_LIMIT}&_page=${currentPage}`
					const res = await dataFetcher.getPostsByQuery(paginationQueryString)
					const data = await res.json()
					setTotalCount(Number(res.headers.get('X-Total-Count')))
					setPosts([...posts, ...data])
					setCurrentPage(currentPage + 1)
				} catch (error) {
					console.error('Error fetching data:', error)
				} finally {
					setFetching(false)
				}
			}
		}
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetching, currentPage])

	/* LOAD BY SCROLL */
	useEffect(() => {
		const scrollHandler = () => {
			if (
				document.documentElement.scrollHeight -
					(document.documentElement.scrollTop + window.innerHeight) <
					100 &&
				currentPage <= SCROLL_PAGINATION_LIMIT &&
				!fetching
			) {
				setFetching(true)
			}
		}

		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage])

	/* HANDLE LOAD */
	const handleLoadMoreClick = () => {
		setFetching(true)
	}

	return { posts, currentPage, totalCount, handleLoadMoreClick }
}
