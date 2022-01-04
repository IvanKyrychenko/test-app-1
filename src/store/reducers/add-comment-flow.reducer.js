const initialState = {
    comment: ''
}

export default function addCommentFlowReducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'CHANGE_COMMENT_SECTION':
            return {
                ...state,
                comment: payload
            }

        default:
            return state
    }
}
