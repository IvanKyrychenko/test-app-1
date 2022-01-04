import './DetailsPage.scss';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addNewComment } from '../../../src/store/actions/add-new-comment.actions'

const DetailsPage = () => {

    const { id } = useParams()
    const products = useSelector(state => state.products.items)
    const desiredProduct = products.find(item => item.uid === id)

    const dispatch = useDispatch()
    const comment = useSelector(state => state.addCommentFlow.comment)
    const onCommentChange = (value) => dispatch({ type: 'CHANGE_COMMENT_SECTION', payload: value })

    const handleAddComment = () => {
        dispatch(addNewComment())
    }

    return (
        <div>
            <div className='background'>
                <div className="wrapper">
                    <div>
                        <h1 className='item-details-header' uid={id} >Product Details:  </h1>
                        <div className='details-content'>
                            <img className="details-pic" src={desiredProduct.imgSrc} alt="Grocery Pic" />
                            <div className="details-item-info">
                                <div>
                                    <div className="details-item-name">{desiredProduct.name}</div>
                                    <div className="details-item-details">{desiredProduct.description}</div>
                                    <Input className='details-comment' placeholder="Type your comment here" value={ comment } onChange={(event) => onCommentChange(event.currentTarget.value)} />
                                    <button onClick={ handleAddComment }>ADD_NEW_COMMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;