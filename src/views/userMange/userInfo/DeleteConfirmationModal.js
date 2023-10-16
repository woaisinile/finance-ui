import { Modal } from 'antd';

const DeleteConfirmationModal = ({ isVisible, onConfirm, onCancel }) => {
    return (
        <Modal
            title="确认删除"
            visible={isVisible}
            onOk={onConfirm}
            onCancel={onCancel}
            okText="确认"
            cancelText="取消"
        >
            <p>确定要删除吗？</p>
        </Modal>
    );
};

export default DeleteConfirmationModal;
