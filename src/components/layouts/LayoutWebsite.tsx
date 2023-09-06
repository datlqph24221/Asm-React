import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <Layout className="h-screen mx-auto">
            <Header className='flex justify-between items-center mb-4'>
                <div className="demo-logo">Logo</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: "1",
                            // icon: <AiOutlineUser />,
                            label: <Link to="/">Trang chủ</Link>,
                        },
                        {
                            key: "2",
                            // icon: <AiOutlineVideoCamera />,
                            label: <Link to="/about">About</Link>,
                        },
                    ]}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: "1",
                            // icon: <AiOutlineUser />,
                            label: <Link to="/signup">Đăng ký</Link>,
                        },
                        {
                            key: "2",
                            // icon: <AiOutlineVideoCamera />,
                            label: <Link to="/signin">Đăng nhập</Link>,
                        },
                    ]}
                />
            </Header>
            <Content>
                <div className="site-layout-content">
                    <Outlet />
                </div>
            </Content>
            <Footer className="text-center fixed bottom-0">Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default LayoutWebsite;