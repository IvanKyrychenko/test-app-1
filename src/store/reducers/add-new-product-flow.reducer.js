const initialState = {
    name: '',
    url: '',
    description: ''
}

export default function addNewProductFlowReducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'ADD_NEW_PRODUCT_FLOW/NAME_CHANGE':
            return {
                ...state,
                name: payload
            }

        case 'ADD_NEW_PRODUCT_FLOW/URL_CHANGE':
            return {
                ...state,
                url: payload
            }

        case 'ADD_NEW_PRODUCT_FLOW/DESCRIPTION_CHANGE':
            return {
                ...state,
                description: payload
            }
        default:
            return state
    }


}
