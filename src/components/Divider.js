import React from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-left: -16px;
	margin-right: -16px;
`

const Divider = ({ theme }) => {
	return (
		<Wrapper role="separator">
			<svg width="100%" height="10">
				<circle cx="1%" cy="5" r="3" stroke={theme.divider} strokeWidth="1" fill="transparent" />
				<line x1="1%" x2="99%" stroke={theme.divider} y1="5" y2="5" />
				<circle cx="99%" cy="5" r="3" stroke={theme.divider} strokeWidth="1" fill="transparent" />
			</svg>
		</Wrapper>
	)
}
Divider.propTypes = {}

export default withTheme(Divider)
