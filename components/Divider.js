import { memo } from 'react'

import styles from 'app/Global.module.css'

const Divider = () => {
	return (
		<div className={styles.divider} role="separator">
			<svg width="100%" height="10">
				<circle cx="1%" cy="5" r="3" stroke="var(--positionName)" strokeWidth="1" fill="transparent" />
				<line x1="1%" x2="99%" stroke="var(--divider)" y1="5" y2="5" />
				<circle cx="99%" cy="5" r="3" stroke="var(--positionName)" strokeWidth="1" fill="transparent" />
			</svg>
		</div>
	)
}

export default memo(Divider)
