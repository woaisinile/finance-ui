import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const OnlineLoanInfo = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                OnlineLoanInfo
            </div>

        </ConfigProvider>
    )
}

export default OnlineLoanInfo;
