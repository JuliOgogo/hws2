export type InitStateType = {
    themeId: string
}

const initState: InitStateType = {
    themeId: '1',
}

export const themeReducer = (state: InitStateType = initState, action: changeThemeIdActionType): InitStateType => { // fixed
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: string): changeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fixed

export type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: string
}