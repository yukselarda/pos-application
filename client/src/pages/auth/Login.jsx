import React from 'react'
import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from '../../components/auth/AuthCarousel'


function Login() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });

            const user = await res.json();

            if (res.status === 200) {
                localStorage.setItem(
                    "posUser",
                    JSON.stringify({
                        username: user.username,
                        email: user.email,
                    })
                );
                message.success("Giriş işlemi başarılı.");
                navigate("/");
            } else if (res.status === 404) {
                message.error("Kullanıcı bulunamadı!");
            } else if (res.status === 403) {
                message.error("Şifre yanlış!");
            }
            setLoading(false);
        } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            remember: false,
                        }}
                    >
                        <Form.Item label="E-Mail" name={"email"} rules={[{ required: true, message: "E-Mail Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Şifre" name={"password"} rules={[{ required: true, message: "Şifre Alanı Boş Bırakılamaz!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName='checked'>
                            <div className='flex justify-between items-center'>
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                                <Link>Forgot Password</Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full' size='large' loading={loading}>Giriş Yap</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full '>Bir hesabınız yok mu? &nbsp;<Link to={"/register"} className='text-blue-600'>Şimdi Kaydol</Link></div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]'>
                    <div className='w-full '>
                        <div className='h-full'>
                            <Carousel className='!h-full px-6' autoplay>
                                <AuthCarousel img="/images/responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
                                <AuthCarousel img="/images/statistic.svg" title="statistic" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
                                <AuthCarousel img="/images/customer.svg" title="customer" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
                                <AuthCarousel img="/images/responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
