import { v4 as uuidv4 } from 'uuid';

export const addNewProduct = () => {
    return (dispatch, getState) => {

        const newProduct = {
            ...getState().addNewProductFlow,
            uid: uuidv4()
        }

        dispatch({ type: 'PRODUCTS/CREATE_NEW', payload: newProduct })

    }
}

export const deleteProduct = (uid) => {
    return (dispatch, getState ) => {
        dispatch({ type: 'PRODUCTS/DELETE_ITEM', payload: uid })
    }
}