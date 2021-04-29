import React, { useEffect, useState } from "react";
import { Api } from "../../../Api";
import "./Filters.scss";
export default function Filter(props) {
  const { onChange } = props;

  const [filters, setFilters] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // API call to fetch the filter's values
    setTimeout(() => {
      setFilters(Api.getFilters());
    }, 500);
  }, []);

  const changeHandler = (e) => {
    const elem = e.target;
    let newSelected = [...selected];
    if (elem.checked) {
      newSelected.push(elem.value);
    } else {
      newSelected = newSelected.filter((val) => {
        return val !== elem.value;
      });
    }
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="filters flex flex-column">
      {filters.length
        ? filters.map((filter) => {
            return (
              <div>
                <input
                  type="checkbox"
                  name={filter.alpha_two_code}
                  value={filter.alpha_two_code}
                  onChange={changeHandler}
                />
                <span>{filter.country}</span>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}
