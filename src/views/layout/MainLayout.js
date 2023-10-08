import React,{useState} from "react";
// 图标
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    WindowsOutlined,
    AccountBookOutlined,
    KeyOutlined,
    AlipayOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './MainLayout.css'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'

const {
    Header,
    Sider,
    Content
} = Layout;

// 顶部导航栏
const items = [
    {
        label: (
            <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
                去百度
            </a>
        ),
        key: 'alipay',
    },
    {
        key: 'exit',
        icon: <UserOutlined />,
        label: '退出',
    },
];
const leftItems = [
    {
        key: 'systemHome',
        icon: <WindowsOutlined />,
        label: '系统首页',
    },
    {
        key: 'userInfoManage',
        icon: <UserOutlined />,
        label: '用户信息管理',
        children: [
            {
                key: 'userInfo',
                label: '用户信息'
            },
            {
                key: 'bankCard',
                label: '银行卡'
            },
            {
                key: 'humanReport',
                label: '个人征信'
            }
        ]
    },
    {
        key: 'financeProductManage',
        icon: <AccountBookOutlined />,
        label: '理财产品管理',
        children: [
            {
                key: 'change',
                label: '零钱理财'
            },
            {
                key: 'wage',
                label: '工资理财'
            },
            {
                key: 'time',
                label: '期限理财'
            },
            {
                key: 'fund',
                label: '基金理财'
            },
            {
                key: 'bank',
                label: '精选银行'
            }
        ]
    },
    {
        key: 'authorityMange',
        icon: <KeyOutlined />,
        label: '权限管理',
        children: [
            {
                key: 'userRights',
                label: '用户权限'
            },
            {
                key: 'adminRights',
                label: '管理员权限'
            }
        ]
    },
    {
        key: 'onlineLoanMange',
        icon: <AlipayOutlined />,
        label: '网贷管理',
        children: [
            {
                key: 'onlineLoanCheck',
                label: '网贷审核'
            },
            {
                key: 'onlineLoanInfo',
                label: '网贷信息'
            }
        ]
    }
]
export default function MainLayout(){
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 顶部菜单栏选中状态
    const [current, setCurrent] = useState('mail');
    // 获取路由传递过来的值,保存登录用户的值
    const location = useLocation();
    const user = location?.state?.result;

    const clickMenu = (e) => {
        console.log(user)
        setCurrent(e.key)
        switch (e.key){
            case 'userInfo':
                navigate('/mainLayout/userInfo')
                break
            case 'exit':
                sessionStorage.clear();
                localStorage.clear();
                navigate('/')
                break
            default:
                break
        }
    }
    return(
        <Layout className={'mainLayout'}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <div className={'logo'}>{collapsed ? '理财' : '理财应用管理'}</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={clickMenu}
                    items={leftItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div className="header-content">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Menu onClick={clickMenu} className={"menu"} selectedKeys={[current]} mode="horizontal" items={items} />
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
