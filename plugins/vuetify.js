import customTheme from './theme'
//import '@fortawesome/fontawesome-free/css/all.css'

export default {
	theme: {
		options: {
			customProperties: true
		},
		dark: true,
		themes: {
			light: customTheme.light,
			dark: customTheme.dark
		}
	},
	icons: {
		iconfont: 'mdi',
	}
}
