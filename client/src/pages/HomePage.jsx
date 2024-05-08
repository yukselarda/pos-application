import { Button, Flex } from 'antd';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CartTotals from '../components/cart/CartTotals';
import { useState, useEffect } from 'react';
function HomePage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/categories/get-all");
                const data = await res.json();
                data &&
                    setCategories(
                        data.map((item) => {
                            return { ...item, value: item.title };
                        })
                    );
            } catch (error) {
                console.log(error);
            }
        }

        getCategories();
    }, [])

    return (
        <>
            <Header />
            <div className="home px-6 flex-col md:flex-row flex justify-between max-h-max md:max-h-[100vh] gap-10 md:pb-0 h-screen">
                <div className="categories overflow-auto">
                    <Categories categories={categories} setCategories={setCategories} />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_130px)] overflow-y-auto">
                    <Products categories={categories} />
                </div>
                <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}

export default HomePage
