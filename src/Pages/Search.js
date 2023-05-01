/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Pagination, Checkbox } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { CONFIG } from '../storage/Config'
import { Spin, Empty } from "antd"
import { Link, useLocation } from "react-router-dom"
const PRODUCT_PER_PAGE = 16
const defaultImageLinkLaptop = "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/_/1_126_2_1.png"
const API = process.env.REACT_APP_API


const ListConfig = ({ configs, keyConfig, handleSearch }) => {
    const [checked, setChecked] = useState(null)

    const handleChange = (e) => {
        e.preventDefault()

        if (checked === e.target.value) {
            setChecked(null)
            handleSearch(null, keyConfig)
            return
        }

        setChecked(e.target.value)
        handleSearch(e.target.value, keyConfig)
    }

    return (
        <div>
            {configs.map((config, index) => {
                return (
                    <div className="mt-[8px]">
                        <Checkbox onChange={handleChange} value={config.value} checked={checked === config.value}>{config.name}</Checkbox>
                    </div>
                )
            })}
        </div>
    )
}

const ListProduct = ({ products }) => {
    const numberOfProduct = products.length
    const rows = [...Array(Math.ceil(numberOfProduct / 4))]
    const productPerRows = rows.map((row, index) =>
        products.slice(index * 4, index * 4 + 4)
    )

    return (
        <div>
            {productPerRows.map((row, index) =>
                <div key={index} className='flex justify-left mb-[60px]'>
                    {row.map((product, index) =>
                        <Link to="/product" state={{productID : product.ProductID}} key={index * 10090} className={`bg-white rounded-[5px] p-[12px] cursor-pointer w-[23%] pb-[24px] ${index !== 0 ? "ml-[2.666666%]" : ""}`}>
                            <div className="h-[70%]">
                                <img src={product.ImageLink.length === 0 ? defaultImageLinkLaptop : product.ImageLink} className="w-full" alt="item" />
                            </div>
                            <div className="h-[30%]">
                                <p className='font-bold mt-[20px] text-[14px]'>{product.ProductName}</p>
                                <div className='mt-[4px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{product.SalePrice}</span>
                                    <span className='text-[14px] text-[#86868B] line-through'>{product.NormalPrice}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

const Search = () => {
    const location = useLocation()

    let typeProduct = null
    if (location.state !== null) {
        typeProduct = location.state.typeProduct
    }


    const [listAllProduct, setListAllProduct] = useState([])
    const [listCurrentProduct, setListCurrentProduct] = useState([])
    const [request, setRequest] = useState(API)
    const [isLoading, setIsLoading] = useState(false)

    const handleChangePage = (page) => {
        const start = (page - 1) * PRODUCT_PER_PAGE
        const end = start + PRODUCT_PER_PAGE
        setListCurrentProduct(listAllProduct.slice(start, Math.min(listAllProduct.length, end)))
    }

    const filter = (allProduct) => {
        const newAllProduct = []
        for (const product of allProduct) {
            if (product.ImageLink === undefined || product.ImageLink === null || product.ImageLink.length === 0)
                continue
            if (product.SalePrice === undefined || product.SalePrice === null || product.SalePrice.length === 0)
                continue
            if (product.NormalPrice === undefined || product.NormalPrice === null || product.NormalPrice.length === 0)
                continue
            if (product.ProductName === undefined || product.ProductName === null || product.ProductName.length === 0)
                continue
            newAllProduct.push(product)
        }
        return newAllProduct
    }

    const handleSearch = async (request) => {
        try {
            setIsLoading(true)
            const response = await axios.get(request);
            const data = response.data

            if (data.error_code !== undefined) {
                setListAllProduct([])
                setListCurrentProduct([])
            } else {
                const filteredProduct = filter(data)
                setListAllProduct(filteredProduct);
                setListCurrentProduct(filteredProduct.slice(0, Math.min(filteredProduct.length, PRODUCT_PER_PAGE)));
            }
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false)
        setRequest(request)
    }

    const handleConfigSearch = async (value, key) => {
        let newRequest = request
        if (value === null) {
            const regex = new RegExp(`&${key}=[^&]+`, 'g');
            newRequest = newRequest.replace(regex, '');
        } else {
            const regex = new RegExp(`(${key}=)[^&]+`, 'g');
            if (newRequest.match(regex)) {
                newRequest = newRequest.replace(regex, `$1${value}`);
            } else {
                newRequest += `&${key}=${value}`;
            }
        }

        handleSearch(newRequest)
    }

    const handleSearchByName = async (value) => {
        handleConfigSearch(value, "search")
    }

    const handlePressEnter = async (e) => {
        e.preventDefault();
        handleSearchByName(e.target.value)
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        handleSearchByName(e.target.elements[0].value)
    };


    useEffect(() => {
        if (typeProduct === null || typeProduct === undefined)
            return
        handleConfigSearch(typeProduct, "list")
    }, [typeProduct])


    return (

        <div className="my-[40px]">
            <div className="flex justify-center flex-col items-center">
                <h2 className="text-[30px] font-bold mb-[20px]">Tìm kiếm</h2>
                <div className="w-full max-w-[1200px] py-[30px] bg-white rounded-[5px] px-[30px]">
                    <p className="mb-[12px]"> Tìm từ khóa:</p>
                    <form id="search" onSubmit={handleSubmitForm}>
                        <Input className="mb-[20px] h-[40px]" onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handlePressEnter(e);
                            }
                        }} allowClear />
                    </form>
                    <div className="flex justify-center">
                        <button form="search" type="submit" className="w-[200px] bg-[#0066cc] text-white hover:opacity-80 text-[20px] h-[40px]">Tìm kiếm</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-[70px]">
                <div className="w-[20%]">
                    {CONFIG.map((config, index) => {
                        return (
                            <div key={config.key} className="mt-[8px] ">
                                <h3>{config.title}</h3>
                                <ListConfig handleSearch={handleConfigSearch} configs={config.value} keyConfig={config.key} />
                            </div>
                        )
                    })}
                </div>
                <div className="w-[80%]">
                    <Spin spinning={isLoading}>
                        {listCurrentProduct.length === 0 ? <Empty /> :
                            <ListProduct products={listCurrentProduct} />
                        }
                    </Spin>
                </div>
            </div>
            <div className="flex justify-center">
                <Pagination
                    onChange={handleChangePage}
                    defaultCurrent={1} pageSize={PRODUCT_PER_PAGE} total={listAllProduct.length}
                />
            </div>
        </div>
    )
}

export default Search