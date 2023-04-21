import { Input, Space } from "antd"

const Search = () => {
    return (
        <Space>
            <Search
                placeholder="input search text"
                onSearch={(value) => { console.log(value) }}
                style={{
                    width: 200,
                }}
            />
        </Space>
    )
}

export default Search