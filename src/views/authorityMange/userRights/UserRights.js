import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const UserRights = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                UserRights
            </div>

        </ConfigProvider>
    )
}

export default UserRights;
