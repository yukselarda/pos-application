import { Form, Modal, Input, Select, Button, Card, Space } from "antd"

function CreateBill({ isModalOpen, setIsModalOpen }) {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} onFinish={onFinish}>
            <Form layout={"vertical"}>
                <Form.Item label="Müşteri Adı" name={"CustomerName"} rules={[{ required: true, message: "Müşteri Adı Boş Geçilemez" }]}>
                    <Input placeholder="Müşteri Adı Soyadı" />
                </Form.Item>
                <Form.Item label="Telefon Numarası" name={"phoneNumber"} rules={[{ required: true, message: "Telefon Numarası Boş Geçilemez" }]}>
                    <Input maxLength={11} placeholder="Telefon Numarası Yazınız" />
                </Form.Item>
                <Form.Item label="Ödeme yöntemi" name={"paymentMode"} rules={[{ required: true, message: "Ödeme Yöntemi Boş Geçilemez" }]}>
                    <Select placeholder="Ödeme Yöntemi Seçiniz">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>
                <Space className='space_widht'>
                    <Card className='w-full'>
                        <div className='flex justify-between'>
                            <span>Ara Toplam</span>
                            <span>550</span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span>KDV Toplam %8</span>
                            <span className='text-red-900'>43.92₺</span>
                        </div>
                        <div className='flex justify-between'>
                            <b>Toplam</b>
                            <b>592.92₺</b>
                        </div>
                        <div className="flex justify-end">
                            <Button className='mt-4 w-full' type='primary' size='large' onClick={() => setIsModalOpen(true)}>Sipariş Oluştur</Button>
                        </div>
                    </Card>
                </Space>
            </Form>
        </Modal>
    )
}

export default CreateBill
