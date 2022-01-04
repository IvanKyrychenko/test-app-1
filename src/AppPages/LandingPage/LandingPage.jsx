import './LandingPage.scss';
import { useSelector } from 'react-redux'
import { Menu, Dropdown } from 'antd';
import ItemContent from './ItemContent';
import AddItemModal from './AddItemModal/AddItemModal';

const LandingPage = () => {

    const items = useSelector(state => state.products.items)

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item >A {'>'} Z</Menu.Item>
            <Menu.Item >Z {'>'} A</Menu.Item>
            <Menu.Item >Amount +</Menu.Item>
            <Menu.Item >Amount -</Menu.Item>
        </Menu>
    );

    function handleMenuClick(e) {
        console.log('click', e);
    }

    return (
        <div>
            <div className='background'>
                <div className="wrapper">
                    <div className="header">
                        <AddItemModal className='header-button' />
                        <Dropdown.Button className='header-button' overlay={menu}>Sort By</Dropdown.Button>
                    </div>
                    {items.map(item => <ItemContent data={item} />)}
                </div>
            </div>
        </div>
    )
}

export default LandingPage;