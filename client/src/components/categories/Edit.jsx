import { Form, Modal, Table, Input, Button, message } from 'antd'
import React, { useState } from 'react'

function Edit({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) {
    const [editingRow, setEditingRow] = useState({});

    const onFinish = (values) => {
        console.log(values);
        try {
            fetch("http://localhost:5000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values, _id: editingRow._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Kategori Başarıyla Güncellendi")
            setCategories(categories.map((item) => {
                if (item._id === editingRow._id) {
                    return { ...item, title: values.title };
                } else {
                    return item;
                }

            }))
        } catch (error) {
            message.error("Bir Şeyler Yanlış Gitti")
            console.log(error);
        }
    }

    const deleteCategory = (id) => {
        if (window.confirm("Emin misiniz?")) {
            try {
                fetch("http://localhost:5000/api/categories/delete-category", {
                    method: "DELETE",
                    body: JSON.stringify({ _id: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                })
                message.success("Kayıt Başarıyla Silindi")
                setCategories(categories.filter((item) => item._id !== id));
            } catch (error) {
                console.log(error);
                message.error("Bir Şeyler Yanlış Gitti")
            }
        }
    };

    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            render: (_, record) => {
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item className='mb-0' name="title">
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    )
                } else {
                    return <p>{record.title}</p>
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className='flex'>
                        <Button onClick={() => setEditingRow(record)} type='link' className='pl-0'>Düzenle</Button>
                        <Button type='link' className='text-gray-600' htmlType='submit'>Kaydet</Button>
                        <Button type='link' danger onClick={() => deleteCategory(record._id)}>Sil</Button>
                    </div>
                )
            }
        }
    ]

    return (
        <Modal open={isEditModalOpen} title="Kategori İşlemleri" footer={false} onCancel={() => setIsEditModalOpen(false)}>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
            </Form>
        </Modal>
    )
}

export default Edit
