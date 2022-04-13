module.exports = {
	extends: ['airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		'react/jsx-filename-extension': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'indent': ['error', "tab"],
	}
}
