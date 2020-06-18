import React from 'react'
import styled from 'styled-components'

const DocumentWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Document = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 980px;
	margin-top: 16px;
	margin-bottom: 32px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0, 0, 0, 0.15),
		0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15);
	padding: 16px;
	min-height: 200px;
`

function App() {
	return (
		<DocumentWrapper>
			<Document>
				<h1>Shawn Hoffman</h1>
			</Document>
		</DocumentWrapper>
	)
}

export default App
