// #router
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

export const AppRouter = memo(() => {
	return <Outlet />
})
