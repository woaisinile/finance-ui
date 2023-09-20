import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const OnlineLoanCheck = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                OnlineLoanCheck
            </div>

        </ConfigProvider>
    )
}

export default OnlineLoanCheck;
