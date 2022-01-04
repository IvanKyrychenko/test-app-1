import './LandingPage.scss';
import { Menu, Dropdown } from 'antd';
import ItemContent from './ItemContent';
import AddItemModal from './AddItemModal/AddItemModal';

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
                        <AddItemModal className='header-button' />
                        <Dropdown.Button className='header-button' overlay={menu}>Sort By</Dropdown.Button>
                    </div>
                    <ItemContent />
                    <ItemContent />
                    <ItemContent />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;