import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, Input, message } from "antd";
import { useSelector } from "react-redux";
import "./index.css";

function Header({ setSearch }) {
    const cart = useSelector((state) => state.cart);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const logOut = () => {
        if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
            localStorage.removeItem("posUser");
            navigate("/login");
            message.success("Çıkış işlemi başarılı.");
        }
    };

    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center gap-10'>
                <div className="logo">
                    <a href="">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center" onClick={() => { pathname !== "/" && navigate("/"); }}>
                    <Input size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} className='rounded-full max-w-[800px]'  onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                </div>
                <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto md:bg-transparent w-screen bg-white left-0 md:border-t-0 border-t md:px0-0 px-4 py-1">
                    <Link to={"/"} className='menu-link flex items-center flex-col hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined className='md:text-2xl tex-xl' />
                        <span className='md:text-xs text-[10px]'>Ana Sayfa</span>
                    </Link>
                    <Badge count={cart.cartItems.length} offset={[0, 6]} className='md:flex hidden'>
                        <Link to={"/cart"} className='menu-link flex items-center flex-col hover:text-[#40a9ff] transition-all'>
                            <ShoppingCartOutlined className='md:text-2xl tex-xl' />
                            <span className='md:text-xs text-[10px]'>Sepet</span>
                        </Link>
                    </Badge>
                    <Link to={"/bills"} className='menu-link flex items-center flex-col hover:text-[#40a9ff] transition-all'>
                        <CopyOutlined className='md:text-2xl tex-xl' />
                        <span className='md:text-xs text-[10px]'>Faturalar</span>
                    </Link>
                    <Link to={"/customers"} className='menu-link flex items-center flex-col hover:text-[#40a9ff] transition-all'>
                        <UserOutlined className='md:text-2xl tex-xl' />
                        <span className='md:text-xs text-[10px]'>Müşteriler</span>
                    </Link>
                    <Link to={"/statistic"} className='menu-link flex items-center  flex-col hover:text-[#40a9ff] transition-all'>
                        <BarChartOutlined className='md:text-2xl tex-xl' />
                        <span className='md:text-xs text-[10px]'>İstatisiklikler</span>
                    </Link>
                    <div onClick={logOut}>
                        <Link className="menu-link">
                            <LogoutOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-[10px]">Çıkış</span>
                        </Link>
                    </div>
                </div>
                <Badge count={cart.cartItems.length} offset={[0, 6]} className='md:hidden flex'>
                    <Link to={"/"} className='menu-link flex items-center flex-col hover:text-[#40a9ff] transition-all'>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='md:text-xs text-[10px]'>Sepet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}

export default Header
