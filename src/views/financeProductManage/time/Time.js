import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const Time = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                Time
            </div>

        </ConfigProvider>
    )
}

export default Time;
