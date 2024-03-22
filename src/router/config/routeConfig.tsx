// #router
import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '../../constants/constants'
import { RootLayout } from '../../layout/RootLayout'
import { NotFoundPage, PostsListPage, SinglePostPage } from '../../pages'
import { Redirect } from '../components/Redirect/Redirect'

const routeConfig = {
	main: {
		path: PATH.MAIN,
		element: <Redirect whereTo={PATH.POSTS} />,
	},
	posts: {
		path: PATH.POSTS,
		element: <PostsListPage />,
	},
	post: {
		path: PATH.SINGLE_POST,
		element: <SinglePostPage />,
	},
	not_found: {
		path: PATH.NOT_FOUND,
		element: <NotFoundPage />,
	},
}

export const routes = Object.values(routeConfig).map(route => {
	return route
})

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
])
