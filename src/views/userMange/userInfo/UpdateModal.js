import {Button, Form, Input, Modal} from 'antd';
import {useEffect} from "react";
import {$updateUserById} from "../../../api/userApi";

const UpdateModal = ({ isVisible, onCancel, selectRecord }) => {
    const [updateForm] = Form.useForm()

    const onFinish =async (values) => {
        values.id = selectRecord.id
        const result = await $updateUserById(values)
        onCancel()
    };

    useEffect(() => {
        if (isVisible && selectRecord) {
            updateForm.setFieldsValue(selectRecord);
        }
    }, [isVisible, selectRecord]);

    return (
        <Modal
            title="编辑界面"
            open={isVisible}
            onCancel={onCancel}
            footer={null}
            okText="确认"
            cancelText="取消"
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                form={updateForm}
                onFinish={onFinish}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="真实姓名"
                    name="realname"
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">确认</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UpdateModal;
