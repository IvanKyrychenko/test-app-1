export const addNewComment = (uid) => {
    return (dispatch, getState) => {

        const newCommentText = getState().addCommentFlow.comment

        dispatch({ type: 'CREATE_NEW_COMMENT', payload: newCommentText })
    }
}