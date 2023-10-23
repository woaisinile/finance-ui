import React, {useEffect, useState} from 'react'
import {Button, ConfigProvider, Form, Pagination, Space, Table} from "antd";
import locale from 'antd/es/locale/zh_CN';
import {$deleteUserById, $qryAllUsers, $updateUserById} from "../../../api/userApi";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import UpdateModal from "./UpdateModal";
const UserInfo = () => {
    // 查询出来的用户信息
    const [users, setUsers] = useState([]);
    // 删除弹窗
    const [isModalVisible, setIsModalVisible] = useState(false);
    // 编辑弹窗
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [selectRecord, setSelectRecord] = useState({});

    useEffect( () => {
        userHandle()
    }, [])

    const userHandle = async () => {
        const result = await $qryAllUsers({});
        const modifiedData = result['data'].map((item, index) => {
            return { ...item, key: index }; // 将item的属性拷贝到新对象中，并添加key属性
        });
        setUsers(modifiedData);

    }

    const handleDelete = (record) => {
        setSelectRecord(record)
        setIsModalVisible(true);
    };

    const handleUpdate = (record) => {
        setSelectRecord(record)
        setUpdateModalVisible(true);
    }

    const handleConfirmDelete = async () => {
        // 在这里执行删除操作
        const result = await $deleteUserById(selectRecord)
        // 删除完成后关闭确认弹窗
        setIsModalVisible(false);
    };

    const handleConfirmUpdate = async (record) => {
        console.log(record)
        const result = await $updateUserById(selectRecord)
        setUpdateModalVisible(false);
    }

    const handleCancelDelete = () => {
        setIsModalVisible(false);
    };

    const handleCancelUpdate = () => {
        setUpdateModalVisible(false);
    }

    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '真实姓名',
            dataIndex: 'realname',
            key: 'realname',
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (_, record) =>(
                <>
                    <Space size="small">
                        <Button type="primary" onClick={() => {handleUpdate(record)}}>编辑</Button>
                        <Button danger onClick={() => {handleDelete(record)}}>删除</Button>
                    </Space>
                </>
            )
        }
    ]

    return (
        <ConfigProvider locale={locale}>
            <div>
                {/*表格*/}
                <div>
                    <Table
                        columns={columns}
                        dataSource={users}
                    />
                    <Pagination />
                </div>
                <UpdateModal
                    isVisible={updateModalVisible}
                    onCancel={handleCancelUpdate}
                    selectRecord={selectRecord}
                    userHandle={userHandle}
                />

                <DeleteConfirmationModal
                    isVisible={isModalVisible}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            </div>
        </ConfigProvider>
    )
}

export default UserInfo;
