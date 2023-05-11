import CPS_LOGO from '../assets/shop/CPS.png'
import FPT_LOGO from '../assets/shop/FPT.png'
import PV_LOGO from '../assets/shop/PV.png'
import TGDD_LOGO from '../assets/shop/TGDD.png'

export const CONFIG = [
    {
        title: "Giá",
        key: "price",
        value: [
            { name: "Dưới 5 triệu", value: "0-5" },
            { name: "5 - 10 triệu", value: "5-10" },
            { name: "10 - 20 triệu", value: "10-20" },
            { name: "20 - 30 triệu", value: "20-30" },
            { name: "trên 30 triệu", value: "30-999" },
        ]
    },
    {
        title: "Loại sản phẩm",
        key: "list",
        value: [
            { name: "Laptop", value: "laptop" },
            { name: "Điện thoại", value: "dienthoai" },
            { name: "Tablet", value: "tablet" },
        ]
    },
    {
        title: "RAM",
        key: "ram",
        value: [
            { name: "4GB", value: "4gb" },
            { name: "8GB", value: "8gb" },
            { name: "16GB", value: "16gb" },
            { name: "32GB", value: "32gb" },
        ]
    },
    {
        title: "ROM",
        key: "rom",
        value: [
            { name: "64GB", value: "64GB" },
            { name: "128GB", value: "128GB" },
            { name: "256GB", value: "256GB" },
            { name: "512GB", value: "512GB" },
            { name: "1TB", value: "1TB" },
        ]
    },
    {
        title: "SCREEN",
        key: "screen",
        value: [
            { name: "5.5 inch", value: "5.5inch" },
            { name: "6 inch", value: "6inch" },
            { name: "6.5 inch", value: "6.5inch" },
            { name: "7 inch", value: "7inch" },
            { name: "13 inch", value: "13inch" },
            { name: "15 inch", value: "15inch" },
            { name: "17 inch", value: "17inch" },
        ]
    },
    {
        title: "Shop",
        key: "shop",
        value: [
            { name: "Phong vũ", value: "PhongVu" },
            { name: "CellPhoneS", value: "CellPhoneS" },
            { name: "FPT Shop", value: "FPTShop" },
            { name: "Thế giới di động", value: "TGDD" },
        ]
    },
    {
        title: "Thương hiệu",
        key: "brand",
        value: [
            { name: "Apple", value: "Apple" },
            { name: "Dell", value: "Dell" },
            { name: "HP", value: "HP" },
            { name: "Lenovo", value: "Lenovo" },
            { name: "Asus", value: "Asus" },
            { name: "Acer", value: "Acer" },
            { name: "MSI", value: "MSI" },
            { name: "LG", value: "LG" },
            { name: "Samsung", value: "Samsung" },
            { name: "Huawei", value: "Huawei" },
            { name: "Xiaomi", value: "Xiaomi" },
            { name: "Oppo", value: "Oppo" },
            { name: "Vivo", value: "Vivo" },
        ]
    },


]

export const LOGO = {
    "PhongVu": PV_LOGO,
    "CellPhoneS": CPS_LOGO,
    "FPTShop": FPT_LOGO,
    "TGDD": TGDD_LOGO,

}