import React, { useState } from "react";
import "./Search.scss";

export default function Search(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState(null);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
      className="search"
    >
      <input
        type="search"
        name="search"
        id="search"
        onChange={changeHandler}
        placeholder="Search"
      />
    </form>
  );
}
