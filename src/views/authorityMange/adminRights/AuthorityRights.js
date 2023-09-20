import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const AuthorityRights = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                AuthorityRights
            </div>

        </ConfigProvider>
    )
}

export default AuthorityRights;
