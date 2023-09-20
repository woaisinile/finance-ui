import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const Change = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                Change
            </div>

        </ConfigProvider>
    )
}

export default Change;
