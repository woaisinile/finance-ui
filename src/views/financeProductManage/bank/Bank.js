import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const Bank = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                Bank
            </div>

        </ConfigProvider>
    )
}

export default Bank;
