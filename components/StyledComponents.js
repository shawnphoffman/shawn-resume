import { styled } from 'linaria/react'

export const NoPrint = styled.div`
	@media print {
		display: none;
	}
`

export const PlainText = styled.div`
	font-size: 14px;

	@media print {
		font-size: 12px;
	}
`

export const DocumentWrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	width: 100vw;
	background: var(--background);
`

export const Document = styled.div`
	background-color: var(--contentBackground);
	display: flex;
	flex-direction: column;
	overflow: auto;
	width: 100%;
	height: 100%;
	min-height: 200px;
	min-width: 320px;
	/* max-width: 980px; */
	max-width: 820px;
	margin-top: 16px;
	margin-bottom: 32px;
	padding: 8px 24px;
	box-shadow: var(--boxShadow) 0px 1px 2px 0px;
	border-radius: 8px;
	color: var(--content);
	transition: var(--transition);

	@media print {
		margin: unset;
		border: none;
		max-width: unset;
		box-shadow: none;
	}
`

export const Title = styled.h1`
	text-align: center;
	font-family: 'Bungee Inline', 'Open Sans';
	font-weight: normal;
	color: var(--title);
	font-size: 42px;
	margin-top: 0;
	margin-right: 0;
	margin-left: 0;
	margin-bottom: 0;

	@media print {
		font-size: 36px;
	}
`

export const ContactContainer = styled.div`
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	font-weight: bold;

	@media print {
		font-size: 12px;
	}
`

export const SectionHeader = styled.h2`
	font-size: 20px;
	text-transform: uppercase;
	color: var(--sectionHeader);
	margin: 0px;

	@media print {
		font-size: 16px;
	}
`

export const ColumnedLists = styled.div`
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 675px) {
		flex-direction: column;
	}
`

export const BulletedList = styled.ul`
	flex: 1;
	margin: 0px;
	padding-left: 24px;
	font-size: 13px;

	@media print {
		font-size: 11px;
	}
`

export const Stint = styled.div`
	margin-top: 0px;
	margin-bottom: 4px;
`

export const Company = styled.h3`
	text-transform: uppercase;
	font-size: 17px;
	font-weight: normal;
	margin: 0;

	@media print {
		font-size: 14px;
	}
`

export const Position = styled.div`
	margin-left: 8px;
`

export const PositionName = styled.h4`
	margin: 0;
	display: inline-block;
	margin-right: 8px;

	&::after {
		content: ',';
	}
`

export const PositionDate = styled.span`
	font-style: italic;
`

export const EducationStint = styled.div`
	font-size: 13px;
	margin-left: 8px;
`

export const Accomplishment = styled.h3`
	text-transform: uppercase;
	margin: 0;
	font-size: 13px;
	display: inline-block;
	margin-right: 4px;

	&::after {
		content: ',';
	}
`

export const TrainingLocation = styled.span`
	display: inline-block;
`

export const TrainingDate = styled.span`
	display: inline-block;
`
