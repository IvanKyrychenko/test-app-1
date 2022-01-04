import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import './AddItemModal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct } from '../../../store/actions/add-new-product.actions'

const { TextArea } = Input;

const AddItemModal = () => {

    const dispatch = useDispatch()

    const { name, description, url } = useSelector(state => state.addNewProductFlow)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onNameChange = (value) => dispatch({ type: 'ADD_NEW_PRODUCT_FLOW/NAME_CHANGE', payload: value })
    const onUrlAdd = (value) => dispatch({ type: 'ADD_NEW_PRODUCT_FLOW/URL_CHANGE', payload: value })
    const onDescriptionChange = (value) => dispatch({ type: 'ADD_NEW_PRODUCT_FLOW/DESCRIPTION_CHANGE', payload: value })

    const showModal = () => setIsModalVisible(true)
    const handleOk = () => {
        dispatch(addNewProduct())
        setIsModalVisible(false)
    }
    const handleCancel = () => setIsModalVisible(false)



    return (
        <>
            <Button className='header-button' type="primary" onClick={showModal}>
                New Product
            </Button>
            <Modal title="Add New Product" visible={isModalVisible} okText={'Create'} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Product's Name" value={name} onChange={(event) => onNameChange(event.currentTarget.value)} />
                <Input className="input-url" value={url} placeholder='Image URL' onChange={(event) => onUrlAdd(event.currentTarget.value)} />
                <div className='modal-text-area'>
                    <div>Product's description</div>
                    <TextArea rows={4} value={description} onChange={(event) => onDescriptionChange(event.currentTarget.value)} />
                </div>
            </Modal>
        </>
    );
};

export default AddItemModal;