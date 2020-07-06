import React from 'react'
import styled from 'styled-components'
import { transition } from './StyledComponents'

import lightTheme from '../themes/base'
import darkTheme from '../themes/dark'
import hotdogTheme from '../themes/hotdog'

const Container = styled.header`
	position: absolute;
	top: 16px;
	left: 16px;

	:hover {
		cursor: pointer;
	}

	@media print {
		display: none;
	}
`

const ThemeIcon = styled.div`
	font-size: 24px;
	color: ${props => props.theme.themeIcons};
	${transition};

	:hover {
		color: ${props => props.theme.content};
	}
`

const mql = window.matchMedia('(prefers-color-scheme: dark)')

//
// TODO - Come up with some dark mode colors and automatically display the dark version when appropriate
//

const ThemeSelector = ({ onClick }) => {
	// Callback to change theme based on OS preference change
	const handlePreferenceChange = React.useCallback(
		e => {
			onClick(e.matches ? darkTheme : lightTheme)
		},
		[onClick]
	)

	// Effect that listens for OS light/dark pref changes
	React.useEffect(() => {
		mql.addListener(handlePreferenceChange)

		return () => {
			mql.removeListener(handlePreferenceChange)
		}
	}, [handlePreferenceChange])

	return (
		<Container>
			<ThemeIcon title="Light Theme" onClick={() => onClick(lightTheme)}>
				<i className="fas fa-sun"></i>
				{/* Light */}
			</ThemeIcon>
			<ThemeIcon title="Dark Theme" onClick={() => onClick(darkTheme)}>
				<i className="fas fa-moon"></i>
				{/* Dark */}
			</ThemeIcon>
			<ThemeIcon title="Hotdog Stand Theme" onClick={() => onClick(hotdogTheme)}>
				<i className="fas fa-hotdog"></i>
				{/* Hotdog */}
			</ThemeIcon>
			{/* <div>Prefers Dark: {prefersDarkMode ? 'True' : 'False'}</div> */}
		</Container>
	)
}
ThemeSelector.propTypes = {}

export default ThemeSelector
