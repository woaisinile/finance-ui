import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const HumanReport = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                HumanReport
            </div>

        </ConfigProvider>
    )
}

export default HumanReport;
