import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import './AddItemModal.scss';

const { TextArea } = Input;

const AddItemModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button className='header-button' type="primary" onClick={showModal}>
                New Product
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Product's Name" />
                <div className='modal-text-area'>
                    <div>Product's description</div>
                    <TextArea rows={4} />
                </div>
            </Modal>
        </>
    );
};

export default AddItemModal;