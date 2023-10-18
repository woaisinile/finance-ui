import { Modal } from 'antd';

const UpdateModal = ({ isVisible, onConfirm, onCancel }) => {
    return (
        <Modal
            title="编辑界面"
            open={isVisible}
            onOk={onConfirm}
            onCancel={onCancel}
            okText="确认"
            cancelText="取消"
        >
            <p>你要更新哪条数据</p>
        </Modal>
    );
};

export default UpdateModal;
