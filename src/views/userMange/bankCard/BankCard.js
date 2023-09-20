import React from 'react'
import {ConfigProvider} from "antd";
import locale from 'antd/es/locale/zh_CN';
const BankCard = () => {

    return (
        <ConfigProvider locale={locale}>
            <div>
                BankCard
            </div>

        </ConfigProvider>
    )
}

export default BankCard;
