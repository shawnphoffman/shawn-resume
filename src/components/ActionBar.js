import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transition } from './StyledComponents'

import lightTheme from '../themes/base'
import darkTheme from '../themes/dark'
import hotdogTheme from '../themes/hotdog'

const Container = styled.header`
	position: absolute;
	top: 16px;
	left: 16px;
	display: flex;
	flex-direction: column;

	:hover {
		cursor: pointer;
	}

	/* TODO - This is so hacky. Come up with a better mobile solution and stop being lazy 🤣️ */
	@media only screen and (max-width: 920px) {
		flex-direction: row;
	}

	@media only screen and (max-width: 675px) {
		display: none;
	}

	@media print {
		display: none;
	}
`

const ThemeIcon = styled.div`
	font-size: 24px;
	color: ${props => props.theme.themeIcons};
	margin-right: 8px;
	${transition};

	:hover {
		color: ${props => props.theme.content};
	}
`

const mql = window.matchMedia('(prefers-color-scheme: dark)')

//
// TODO - Come up with some dark mode colors and automatically display the dark version when appropriate
//

const ActionBar = ({ onThemeClick }) => {
	// Callback to change theme based on OS preference change
	const handlePreferenceChange = React.useCallback(
		e => {
			onThemeClick(e.matches ? darkTheme : lightTheme)
		},
		[onThemeClick]
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
			<ThemeIcon title="Light Theme" onClick={() => onThemeClick(lightTheme)}>
				<i className="fas fa-sun"></i>
				{/* Light */}
			</ThemeIcon>
			<ThemeIcon title="Dark Theme" onClick={() => onThemeClick(darkTheme)}>
				<i className="fas fa-moon"></i>
				{/* Dark */}
			</ThemeIcon>
			<ThemeIcon title="Hotdog Stand Theme" onClick={() => onThemeClick(hotdogTheme)}>
				<i className="fas fa-sausage"></i>
				{/* Hotdog */}
			</ThemeIcon>
			<br />
			{/* GitHub Link */}
			<ThemeIcon
				title="View Source on GitHub"
				as="a"
				href="https://github.com/shawnphoffman/resume"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i>
			</ThemeIcon>
		</Container>
	)
}
ActionBar.propTypes = {
	onThemeClick: PropTypes.func,
}

export default ActionBar
