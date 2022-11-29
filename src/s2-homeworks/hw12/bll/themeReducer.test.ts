import {changeThemeId, themeReducer} from "./themeReducer";

let startState: { themeId: string }

beforeEach(() => {
    startState = {
        themeId: '2'
    }
})

test('set correct theme id', () => {
    const endState: typeof startState = themeReducer(startState, changeThemeId('3'))

    expect(endState.themeId).toBe('3')
    expect(startState.themeId).toBe('2')
})