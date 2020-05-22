//import colors from 'vuetify/es5/util/colors'
import customTheme from './theme'

export default {
	customVariables: ['~/assets/variables.scss'],
	treeShake: true,
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
		iconfont: 'mdi'
	}
}
