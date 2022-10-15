import "./search-box.styles.scss";

const SearchBox = (props) => {
  const { placeholder, onChangeHandler } = props;

  return (
    <input type="search" placeholder={placeholder} className="search-box" onChange={onChangeHandler}/>
  );
};

export default SearchBox;
