import { Modal, Button } from "antd"
import { useState } from 'react';

function PrintBill({ isModalOpen, setIsModalOpen }) {

    return (
        <Modal title="Fatura Yazdır" width={800} open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} >
            <section className="py-20 bg-black ">
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className="overflow-hidden">
                        <div className="logo my-6">
                            <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                        </div>
                        <div className="bill-details">
                            <div className="grid sm:grid-cols-4 gap-12 grid-cols-3">
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Fake Street 123</p>
                                    <p>San Javier</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Fatura</p>
                                    <p>The Boring Company</p>
                                    <p>Tesla Street 007</p>
                                    <p>Frisco</p>
                                    <p>CA 0000</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Fatura Numarası:</p>
                                    <p>00041</p>
                                    <p className="font-bold text-slate-700 mt-2">Veriliş Tarihi:</p>
                                    <p>2022-11-21</p>
                                </div>
                                <div className="text-md sm:block hidden text-slate-500">
                                    <p className="font-bold text-slate-700">Şartlar:</p>
                                    <p>0 Gün</p>
                                    <p className="font-bold text-slate-700 mt-2">Vade:</p>
                                    <p>00.00.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="bill-table-area mt-8">
                            <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th scope="col" className="py-3.5 text-left font-normal text-sm text-slate-700 sm:table-cell hidden md:pl-0">Görsel</th>
                                        <th scope="col" className="py-3.5 text-left font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden">Başlık</th>
                                        <th scope="col" colSpan={4} className="py-3.5 text-left font-normal text-sm text-slate-700 md:pl-0 sm:hidden">Başlık</th>
                                        <th scope="col" className="py-3.5 text-left font-normal text-sm text-slate-700 sm:table-cell hidden md:pl-0">Fiyat</th>
                                        <th scope="col" className="py-3.5 text-left font-normal text-sm text-slate-700 sm:table-cell hidden md:pl-0">Adet</th>
                                        <th scope="col" className="py-3.5 text-end font-normal text-sm text-slate-700 md:pl-0">toplam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200">
                                        <td className="py-4 text-left sm:table-cell hidden">
                                            <img className="w-12 h-12 object-cover" src="data:image/jpeg;base64,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" alt="" />
                                        </td>
                                        <td className="py-4 sm:table-cell hidden text-left">
                                            <div className="flex flex-col">
                                                <span className="font-medium">Şalgam</span>
                                                <span className="sm:hidden inline-block text-xs">Birim Fiyatı 5₺</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-left sm:hidden table-cell" colSpan={4}>
                                            <div className="flex flex-col">
                                                <span className="font-medium">Şalgam</span>
                                                <span className="sm:hidden inline-block text-xs">Birim Fiyatı 5₺</span>
                                            </div>
                                        </td>
                                        <td className="py-4 sm:text-left text-right sm:table-cell hidden">
                                            <span className="text-left ">5₺</span>
                                        </td>
                                        <td className="py-4 sm:text-left text-right sm:table-cell hidden">
                                            <span className="text-left">1</span>
                                        </td>
                                        <td className="py-4 text-end">
                                            <span className="">500₺</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="text-right pt-4 sm:table-cell hidden" colSpan={4} scope="row"><span className="font-normal text-slate-700">Ara Toplam</span></th>
                                        <th className="text-left pt-4 sm:hidden" colSpan={4} scope="row"><p className="font-normal text-slate-700">Ara Toplam</p></th>
                                        <th className="text-right pt-4" scope="row"><span className="font-normal text-slate-700">978₺</span></th>
                                    </tr>
                                    <tr>
                                        <th className="text-right pt-4 sm:table-cell hidden" colSpan={4} scope="row"><span className="font-normal text-slate-700">KDV</span></th>
                                        <th className="text-left pt-4 sm:hidden" colSpan={4} scope="row"><p className="font-normal text-slate-700">KDV</p></th>
                                        <th className="text-right pt-4" scope="row"><span className="font-normal text-red-600">+41.00₺</span></th>
                                    </tr>
                                    <tr>
                                        <th className="text-right pt-4 sm:table-cell hidden" colSpan={4} scope="row"><span className="font-normal text-slate-700">Genel Toplam</span></th>
                                        <th className="text-left pt-4 sm:hidden" colSpan={4} scope="row"><p className="font-normal text-slate-700">Genel Toplam</p></th>
                                        <th className="text-right pt-4" scope="row"><span className="font-normal text-slate-700">978₺</span></th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="py-9">
                                <div className="border-t pt-6 border-slate-200">
                                    <p className="text-sm font-light text-slate-700">
                                        Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                                        Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                                        sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                                        talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                                        ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                                        Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                                        geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                                        England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                                        Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className="flex justify-end mt-4">
                <Button type="primary" size="large">Yazdır</Button>
            </div>
        </Modal>
    )
}

export default PrintBill
