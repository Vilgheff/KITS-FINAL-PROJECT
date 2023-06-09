import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
export const SearchBar = () => {
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      size="large"
      style={{
        width: 562,
      }}
    />
  );
};
