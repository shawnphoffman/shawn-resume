import 'styles/globals.css'
import 'styles/sanitize.css'

import Head from 'next/head'

import Layout from 'components/Layout'
import ThemeProvider from 'context/ThemeContext'

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Shawn Hoffman - Resume</title>
				<meta name="description" content="Web App Resume for Shawn Hoffman" />
			</Head>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default App
