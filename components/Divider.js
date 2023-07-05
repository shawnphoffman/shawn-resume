import React from 'react'
import { styled } from 'linaria/react'

const Wrapper = styled.div`
	margin-left: -16px;
	margin-right: -16px;
`

const Divider = () => {
	return (
		<Wrapper role="separator">
			<svg width="100%" height="10">
				<circle cx="1%" cy="5" r="3" stroke="var(--positionName)" strokeWidth="1" fill="transparent" />
				<line x1="1%" x2="99%" stroke="var(--divider)" y1="5" y2="5" />
				<circle cx="99%" cy="5" r="3" stroke="var(--positionName)" strokeWidth="1" fill="transparent" />
			</svg>
		</Wrapper>
	)
}

export default Divider
