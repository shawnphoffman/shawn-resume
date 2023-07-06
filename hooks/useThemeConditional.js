import { css } from '@linaria/core'

const common = `
	--transition: all 0.25s linear;
`

const dark = css`
	--background: #18191a;
	--contentBackground: #242526;
	--boxShadow: #0003;
	--content: #fff;
	--divider: #555;
	--title: #706fd3;
	--sectionHeader: #34ace0;
	--positionName: #33d9b2;
	--themeIcons: #fff3;
	${common}
`

const light = css`
	--background: #f0f2f5;
	--contentBackground: #fff;
	--boxShadow: #0003;
	--content: #000;
	--divider: #d6d5d5;
	--title: #30336b;
	--sectionHeader: #273c75;
	--positionName: #3b3b98;
	--themeIcons: #0003;
	${common}
`

const hotdog = css`
	--background: #f00;
	--contentBackground: #ff0;
	--boxShadow: #0003;
	--content: #000;
	--divider: #f00;
	--title: #000;
	--sectionHeader: #000;
	--positionName: #f00;
	--themeIcons: #ff0c;
	${common}
`

const themeConditional = theme => {
	if (theme === 'light') return light
	if (theme === 'hotdog') return hotdog
	return dark
}

export default themeConditional
