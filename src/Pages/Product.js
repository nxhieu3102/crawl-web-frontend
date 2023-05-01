/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom'
import { Empty } from "antd"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import { LOGO } from '../storage/Config'

const API = process.env.REACT_APP_API

const Product = () => {
    const location = useLocation()
    const [productDetail, setProductDetail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    let productID = null
    if (location.state) {
        productID = location.state.productID
    }

    useEffect(() => {
        if (productID === null || productID === undefined) return
        const getProductDetail = async () => {
            setIsLoading(true)
            const res = await axios.get(API + "detail=" + productID)
            setProductDetail(res.data)
            setIsLoading(false)
        }
        getProductDetail()
    }, [productID])

    return (
        <div>
            <Spin spinning={isLoading}>
                {productDetail === null ? <Empty className="h-[600px]" /> :
                    <div>
                        <div className='flex justify-between mt-[12px] border-b-2'>
                            <h3 className="font-bold text-[24px]">{productDetail.ProductName}</h3>
                            <p className="text-[24px] ">Giá chỉ từ:
                                <span className="text-[red]">&nbsp;
                                    {productDetail.SalePrice}
                                </span>
                            </p>
                        </div>
                        <div className="flex mt-[40px]">
                            <div className=" w-[50%] h-[500px] flex items-center">
                                <img src={productDetail.ImageLink} className="p-[20px] rounded-[10px] bg-white h-[100%]" alt="item" />
                            </div>
                            <div className="flex w-[50%] justify-left">
                                {Object.keys(productDetail.PriceCompare).map((compare, index) => {
                                    return (
                                        <div className="flex flex-col justify-between items-center bg-white mr-[12px] w-[30%] border-solid border-2 h-[150px] py-[12px]">
                                            <div className='h-[50%]'>
                                                <img className='h-full' src={LOGO[compare]} alt="shop" />
                                            </div>
                                            <h3 className="text-[20px] text-[red] font-medium">{productDetail.PriceCompare[compare].SalePrice}</h3>
                                            <a href={productDetail.PriceCompare[compare].ProductLink} target='blank'> Xem ngay </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <h2 className="text-[20px] font-bold">Thông số kĩ thuật {productDetail.ProductName}</h2>
                            <div className='mt-[16px] w-full'>
                                {Object.keys(productDetail.Configuration).map((key, index) => {
                                    return(
                                        <div className='text-[18px] mb-[12px] flex'>
                                            <span className='font-bold w-[20%] block'>{key}</span>: {productDetail.Configuration[key]}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mt-[40px] mb-[40px]">
                            <h2 className="text-[20px] font-bold">CÁC SẢN PHẨM CÓ THỂ BẠN QUAN TÂM</h2>

                            <div className="flex">
                                {productDetail.ProductRelevant.map((product, index) => {
                                    return (
                                        <Link to="/product" state={{ productID: product.ProductID }} className='mr-[12px] bg-white rounded-[5px] p-[12px] cursor-pointer'>
                                            <img src={product.ImageLink} alt="item" />
                                            <div>
                                                <p className='font-bold mt-[20px]'>{product.ProductName}</p>
                                                <div className='mt-[20px] mb-[12px]'>
                                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{product.NormalPrice}</span>
                                                    <span className='text-[14px] text-[#86868B] line-through'>{product.SalePrice}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            </Spin>
        </div>
    )
}
export default Product