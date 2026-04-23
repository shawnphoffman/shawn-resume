import { ImageResponse } from 'next/og'

import { resume } from './_data/resume'

export const runtime = 'edge'
export const alt = 'Shawn Hoffman — Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'center',
					background: '#0a0a0a',
					color: '#fafafa',
					padding: '80px',
					fontFamily: 'sans-serif',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '48px' }}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={resume.avatarUrl}
						alt={resume.name}
						width={160}
						height={160}
						style={{ borderRadius: '9999px', border: '4px solid #262626' }}
					/>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-0.03em' }}>{resume.name}</div>
						<div style={{ fontSize: 28, color: '#a3a3a3', marginTop: 8 }}>Portfolio</div>
					</div>
				</div>
				<div style={{ fontSize: 32, color: '#d4d4d4', maxWidth: 1040, lineHeight: 1.3 }}>{resume.description}</div>
			</div>
		),
		{ ...size }
	)
}
