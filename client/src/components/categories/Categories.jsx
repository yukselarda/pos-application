import { useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css"

const Categories = ({categories, setCategories}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 md:flex-col text-lg overflow-auto max-h-[100vh] pb-[7rem]">
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}
      <li className="category-item !bg-purple-800 hover:opacity-90" onClick={() => setIsAddModalOpen(true)}>
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li className="category-item !bg-orange-800 hover:opacity-90" onClick={() => setIsEditModalOpen(true)}>
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} setCategories={setCategories} categories={categories}/>
      <Edit isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} setCategories={setCategories} categories={categories}/>
    </ul>
  )
}

export default Categories
