function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            const theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
            return {
                ...state,
                theme
            }
        case 'TOGGLE_LANG':
            const language = state.language === 'tr' ? 'en' : 'tr'
            localStorage.setItem('language', language)
            return {
                ...state,
                language
            }
        default:
            return state
    }
}

export default reducer