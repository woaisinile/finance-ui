import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const Wage = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                Wage
            </div>

        </ConfigProvider>
    )
}

export default Wage;
