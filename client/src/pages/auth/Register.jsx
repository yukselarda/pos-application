import React from 'react'
import { Button, Carousel, Form, Input, message } from "antd";
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            if (res.status === 200) {
                message.success("Kayıt işlemi başarılı.");
                navigate("/login");
                setLoading(false);
            }
        } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
        }
    };

    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Kullanıcı Adı" name={"username"} rules={[{ required: true, message: "Kullanıcı Adı Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-Mail" name={"email"} rules={[{ required: true, message: "E-Mail Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Şifre" name={"password"} rules={[{ required: true, message: "Şifre Alanı Boş Bırakılamaz!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Şifre Tekrar"
                            name={"passwordAgain"}
                            dependencies={["password"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Şifre Tekrar Alanı Boş Bırakılamaz!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("Şifreler Aynı Olmak Zorunda!")
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full' size='large' loading={loading}>Kaydol</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full '>Bir hesabınız var mı? &nbsp;<Link to={"/login"} className='text-blue-600'>Şimdi giriş yap</Link></div>
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

export default Register
