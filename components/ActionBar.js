import React, { useCallback } from 'react'
import { styled } from 'linaria/react'

import { useThemeContext } from 'context/ThemeContext'
// import useDetectPrint from 'hooks/useDetectPrint'

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
	color: var(--themeIcons);
	margin-right: 8px;
	transition: var(--transition);

	:hover {
		color: var(--content);
	}
`

const ActionBar = () => {
	const { setThemeOverride } = useThemeContext()
	// Detect print command to load light theme
	// const { setIsPrinting } = useDetectPrint()

	// NOTE - This function is HORRIBLE and not a good practice.
	// Chrome locks up when you try to put window.print inside a timeout so I'm using a Promise to
	// mimic the behavior. This is done because some browsers attempt to print before the print
	// detection fires and adjusts the theme. window.print() was opening the print dialog without the
	// CSS print media
	// const handlePrint = React.useCallback(async () => {
	// 	setIsPrinting(true)
	// 	setThemeOverride('light')
	// 	new Promise(resolve => {
	// 		setTimeout(resolve, 0)
	// 	}).then(() => window.print())
	// }, [setIsPrinting, setThemeOverride])

	const handleClick = useCallback(
		theme => {
			setThemeOverride(theme)
		},
		[setThemeOverride]
	)

	return (
		<Container>
			<ThemeIcon title="Light Theme" onClick={() => handleClick('light')}>
				<i className="fas fa-sun"></i>
				{/* Light */}
			</ThemeIcon>
			<ThemeIcon title="Dark Theme" onClick={() => handleClick('dark')}>
				<i className="fas fa-moon"></i>
				{/* Dark */}
			</ThemeIcon>
			<ThemeIcon title="Hotdog Stand Theme" onClick={() => handleClick('hotdog')}>
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
			{/* Print */}
			{/* <ThemeIcon title="Print" onClick={() => handlePrint()}>
				<i className="fas fa-print"></i>
			</ThemeIcon> */}
		</Container>
	)
}

export default ActionBar
