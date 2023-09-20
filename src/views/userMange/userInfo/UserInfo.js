import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const UserInfo = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                hhhh
            </div>

        </ConfigProvider>
    )
}

export default UserInfo;
