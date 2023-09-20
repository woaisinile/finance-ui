import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const Fund = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                Fund
            </div>

        </ConfigProvider>
    )
}

export default Fund;
