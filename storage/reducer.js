export default function reducer(state, action) {
    console.log(action.type, action.props)
    switch (action.type) {
        case 'NAME_YEFF': 
            return {
                ...state, 
                number: 'Name yeff xd'
            }
            
        case 'RANDOM_NUMBER':
            const newRandomNumber = Math.floor(Math.random() * 100)

            return {
                ...state,
                number: newRandomNumber
            }
    
        default:
            return state
    }
}