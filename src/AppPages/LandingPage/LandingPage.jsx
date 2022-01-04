import './LandingPage.scss';
import { Button, Menu, Dropdown } from 'antd';

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">A {'>'} Z</Menu.Item>
        <Menu.Item key="2">Z {'>'} A</Menu.Item>
        <Menu.Item key="1">Amount +</Menu.Item>
        <Menu.Item key="1">Amount -</Menu.Item>
    </Menu>
);


const LandingPage = () => {
    return (
        <div>
            <div className='background'>
                <div className="wrapper">
                    <div className="header">
                        <Button className='header-button' type="primary">New Product</Button>
                        <Dropdown.Button className='header-button' overlay={menu}>Sort By</Dropdown.Button>
                    </div>


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
            </div>
        </div>
    )
}

export default LandingPage;