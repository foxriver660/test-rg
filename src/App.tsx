/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react'
import { AppRouter } from './router'

export const App = memo(() => {
	return <AppRouter />
})

export default App
