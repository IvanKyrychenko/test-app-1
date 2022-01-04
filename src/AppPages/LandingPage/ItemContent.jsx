import './LandingPage.scss';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../src/store/actions/add-new-product.actions'
import { useHistory } from 'react-router';
import { useParams } from 'react-router';



const ItemContent = (props) => {

    const dispatch = useDispatch()
    const { data } = props

    const handleDelete = () => dispatch(deleteProduct(data.uid))


    let history = useHistory()

    const handleHistory = () => {
        history.push(`details/${data.uid}`)
    }


    return (
        <div>
            <div className='content'>
                <img className="pic" src='https://www.pngitem.com/pimgs/m/241-2414286_grocery-png-transparent-png.png' alt="Grocery Pic" />
                <div className="item-info">
                    <div>
                        <div className="item-name">{data.name}</div>
                        <div className="item-details">{data.description}</div>
                    </div>
                    <div className='item-buttons'>
                        <Button className='details-button' onClick={handleHistory} type="primary" >Details</Button>
                        <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemContent;