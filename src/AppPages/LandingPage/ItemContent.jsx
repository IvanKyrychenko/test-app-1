import './LandingPage.scss';
import { Button } from 'antd';


const ItemContent = () => {
    return (
        <div>
            <div className='content'>
                <img className="pic" src='https://www.pngitem.com/pimgs/m/241-2414286_grocery-png-transparent-png.png' />
                <div className="item-info">
                    <div>
                        <div className="item-name">NAME</div>
                        <div className="item-details">Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</div>
                    </div>
                    <div className='item-buttons'>
                        <Button className='details-button' type="primary">Details</Button>
                        <Button type="primary" danger>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemContent;