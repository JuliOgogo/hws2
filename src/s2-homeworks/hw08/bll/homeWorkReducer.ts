import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy = [...state]
            if (action.payload === 'up') {
                return stateCopy.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return stateCopy.sort((a, b) => a.name < b.name ? 1 : -1)
            } else return stateCopy
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}
