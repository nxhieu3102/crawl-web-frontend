import { Button, Input, Pagination } from "antd"
import axios from "axios"
import { useState, useEffect } from "react"

const ListProduct = ({ products }) => {
    const defaultImageLinkLaptop = "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/_/1_126_2_1.png"
    const numberOfProduct = products.length
    const rows = [...Array(Math.ceil(numberOfProduct / 4))]
    const productPerRows = rows.map((row, index) =>
        products.slice(index * 4, index * 4 + 4)
    )

    return (
        <div className="mt-[70px]">
            {productPerRows.map((row, index) =>
                <div key={index} className='flex justify-between mb-[60px]'>
                    {row.map((product, index) =>
                        <div key={index * 10090} className='bg-white rounded-[5px] p-[12px] cursor-pointer w-[23%]'>
                            <img src={product.ImageLink.length === 0 ? defaultImageLinkLaptop : product.ImageLink} className="w-full" alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>{product.ProductName}</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{product.SalePrice}</span>
                                    <span className='text-[14px] text-[#86868B] line-through'>{product.NormalPrice}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

const Search = () => {
    const [listAllProduct, setListAllProduct] = useState([])
    const [listCurrentProduct, setListCurrentProduct] = useState([])

    const handleChangePage = (page) => {
        const start = (page - 1) * 12
        const end = start + 12
        setListCurrentProduct(listAllProduct.slice(start, Math.min(listAllProduct.length, end)))
    }


    useEffect(() => {
        try {
            const fetchAPI = async () => {
                const response = await axios.get('http://localhost:8000/api/get-all-products')
                const allProduct = response.data
                setListAllProduct(allProduct.slice(0, Math.min(36, allProduct.length)))
                setListCurrentProduct(allProduct.slice(0, Math.min(allProduct.length, 12)))

            }
            fetchAPI()
        } catch (err) {
            console.log(err)
        }
    }, [])



    return (

        <div className="my-[40px]">
            <div className="flex justify-center flex-col items-center">
                <h2 className="text-[30px] font-bold mb-[20px]">Tìm kiếm</h2>
                <div className="w-full max-w-[1200px] py-[30px] bg-white rounded-[5px] px-[30px]">
                    <p className="mb-[12px]"> Tìm từ khóa:</p>
                    <Input className="mb-[20px] h-[40px]" />
                    <div className="flex justify-center">
                        <Button className="w-[200px] bg-[#0066cc] text-white hover:opacity-80 text-[20px] h-[40px]">Tìm kiếm</Button>
                    </div>
                </div>
            </div>
            <ListProduct products={listCurrentProduct} />
            <div className="flex justify-center">
                <Pagination
                    onChange={handleChangePage}
                    defaultCurrent={1} pageSize={12} total={listAllProduct.length}
                />
            </div>
        </div>
    )
}

export default Search