import { memo } from 'react'
import App from '../App'
import { Footer, Header } from '../components'

export const RootLayout = memo(() => {
	return (
		<>
			<Header />
			<App />
			<Footer />
		</>
	)
})
