const initialState = {
    items: [
        {
            uid: 'product-1',
            name: 'Grocery Item 1',
            description: 'Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.',
            imgSrc: 'https://www.pngitem.com/pimgs/m/241-2414286_grocery-png-transparent-png.png',
            comments: []
        },
        {
            uid: 'product-2',
            name: 'Grocery Item 2',
            description: 'Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.',
            imgSrc: 'https://www.pngitem.com/pimgs/m/241-2414286_grocery-png-transparent-png.png',
            comments: []
        },
        {
            uid: 'product-3',
            name: 'Grocery Item 3',
            description: 'Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.',
            imgSrc: 'https://www.pngitem.com/pimgs/m/241-2414286_grocery-png-transparent-png.png',
            comments: []
        },
    ],
    isLoading: false
}

export default function productsReducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'PRODUCTS/CREATE_NEW': {
            return {
                ...state,
                items: [ ...state.items, payload ]
            }
        }
        case 'PRODUCTS/DELETE_ITEM': {

            const items = state.items
            const itemsWithoutDeleted = [ ...items.filter(element => element.uid !== payload) ]
    
            return {
                ...state,
                items: itemsWithoutDeleted
            }
        }
        case 'CREATE_NEW_COMMENT': {
            console.log('>>>>>>>>>>>>>>', payload)
        }

        default:
            return state
    }
}
