import { ChangeEventHandler } from "react";
import "./search-box.styles.scss";

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="search-box"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
