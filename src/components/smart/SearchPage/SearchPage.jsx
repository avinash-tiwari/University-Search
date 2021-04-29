import React, { useState, useEffect } from "react";
import Filters from "../../dumb/Filters/Filters";
import Search from "../../dumb/Search/Search";
import UniversityCard from "../../dumb/UniversityCard/UniversityCard";
import "./SearchPage.scss";
import { Api } from "../../../Api";

export default function SearchPage() {
  const [universityData, setUniversityData] = useState([]);
  const [search, setSearch] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData(search, filters);
  }, [search, filters]);

  const loadData = (search, filters) => {
    setTimeout(() => {
      const result = Api.getUniversities(search, filters);
      setUniversityData(result);
    }, 500);
  };

  const getFilter = (filters) => {
    setFilters(filters);
  };
  const getSearch = (search) => {
    setSearch(search);
  };

  return (
    <div className="search-page">
      <Search onSubmit={getSearch} />
      <div className="search-results grid">
        <div>
          <Filters onChange={getFilter} />
        </div>
        <div className="test grid">
          {universityData.length
            ? universityData.map((university) => {
                return <UniversityCard data={university} />;
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}
